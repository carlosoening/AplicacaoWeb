package livros;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Stateless
@Path("livros")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LivroService {
    
    @PersistenceContext(unitName = "LivrosPU")
    private EntityManager entityManager;
    
    public LivroService() {
    }
    
    @GET
    public List<Livro> getLivros() {
        Query query = entityManager.createQuery("SELECT l FROM Livro l");
        return query.getResultList();
    }
    
    @POST
    public Livro adicionar(Livro livro) {
        entityManager.persist(livro);
        return livro;
    }
    
    @PUT
    @Path("{id}")
    public Livro atualizar(@PathParam("id") Integer id, Livro livro) {
        entityManager.merge(livro);
        return livro;
    }
    
    @DELETE
    @Path("{id}")
    public Livro excluir(@PathParam("id") Integer id) {
        Livro livro = getLivro(id);
        entityManager.remove(livro);
        return livro;
    }
    
    @GET
    @Path("{id}")
    public Livro getLivro(@PathParam("id") Integer id) {
        return entityManager.find(Livro.class, id);
    }
}
