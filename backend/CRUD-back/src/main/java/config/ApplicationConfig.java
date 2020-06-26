package config;

import java.util.Set;
import javax.ws.rs.core.Application;

@javax.ws.rs.ApplicationPath("resources")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(auth.UsuarioService.class);
        resources.add(config.ConstraintViolationExceptionMapper.class);
        resources.add(config.CrossOriginFilter.class);
        resources.add(livros.LivroService.class);
        resources.add(novo.crud.back.resources.JavaEE8Resource.class);
    }

}