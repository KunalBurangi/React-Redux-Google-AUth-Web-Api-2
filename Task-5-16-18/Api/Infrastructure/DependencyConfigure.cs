
using Api;
using Autofac;
using Autofac.Integration.WebApi;
using Entities;
using Repository;
using Services;
using System.Data.Entity;
using System.Reflection;
using System.Web.Http;

namespace AutoFacDemo.Infrastructure
{
    internal class DependencyConfigure
    {

        public static IContainer Container;
        public static void Initialize(HttpConfiguration config)
        {
            Initialize(config, RegisterServices(new ContainerBuilder()));
        }


        public static void Initialize(HttpConfiguration config, IContainer container)
        {
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
        private static IContainer RegisterServices(ContainerBuilder builder)
        {

            builder.RegisterAssemblyTypes(typeof(WebApiApplication).Assembly).PropertiesAutowired();

            //deal with your dependencies here
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterType<EmployeeContext>().As<IDbContext>().InstancePerRequest();
           
            builder.RegisterGeneric(typeof(RepositoryService<>)).As(typeof(IRepository<>));
            builder.RegisterType<EmployeeService>().As<IEmployeeServices>();


            return builder.Build();
        }
    }
}