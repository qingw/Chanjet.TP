﻿using Chanjet.TP.Core;
using Chanjet.TP.Data;
using Nancy;
using Nancy.Bootstrapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Chanjet.TP.ServiceHosting.Modules
{
    public class RepositoryServiceModule : NancyModule
    {
        public RepositoryServiceModule()
        {

            Get["/Api/{Domain}/{Model}"] = parameters =>
            {
                return Invoke(parameters.Domain,parameters.Model, "GetAll", null);
            };

            /*
            Get["Api/{Domain}/{Model}/{Id}"]= parameters =>
                {
                     return Invoke(parameters.Domain,parameters.Model, "Get", null);
                }*/
        }


        private object Invoke(string domain, string model, string methodName, object[] parameters )
        {
            string typeName = String.Format("Chanjet.TP.{0}.Data.{1}, Chanjet.TP.{0}.Data", domain, model);
            var repositoryType = ModelLoader.GetModelRepositoryType(typeName);
            object srv = ServicesFactory.GetServices(repositoryType);
            return Response.AsJson(srv.GetType().GetMethod(methodName).Invoke(srv, parameters));
        }
    }
}
