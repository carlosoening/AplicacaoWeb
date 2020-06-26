package auth;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import livros.Livro;

@Stateless
@Path("usuario")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioService {
    
    @PersistenceContext(unitName = "LivrosPU")
    private EntityManager entityManager;
    
    public UsuarioService() {   
    }
    
    @POST
    public Usuario adicionar(Usuario usuario) {
        entityManager.persist(usuario);
        return usuario;
    }
    
    @GET
    public List<Livro> getUsuarios() {
        Query query = entityManager.createQuery("SELECT u FROM Usuario u");
        return query.getResultList();
    }
    
    @PUT
    @Path("{username}")
    public Boolean validarUsuario(@PathParam("username") String username, Usuario u) {
        Usuario usuario = getUsuario(u.getUsername());
        if (usuario != null) {
            if (u.getSenha().equals(usuario.getSenha())) {
                return true;
            }
        }
        return false;
    }
    
    public Usuario getUsuario(String username) {
        Query query = entityManager.createQuery("SELECT u FROM Usuario u WHERE u.username like '"+username+"'");
        Usuario usuario = (Usuario) query.getSingleResult();
        if (usuario != null) {
            return usuario;
        } else {
            return null;
        }
    }
}
