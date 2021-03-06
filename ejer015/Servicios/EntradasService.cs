﻿using ejer15.Models;
using ejer15.Repository;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;

namespace ejer15.Servicios
{
    public class EntradasService : IEntradasService
    {
        private IEntradasRepository entradasRepository;
        public EntradasService(IEntradasRepository _entradasRepository)
        {
            this.entradasRepository = _entradasRepository;
        }

        public Entrada Get(long id)
        {
               return entradasRepository.Get(id);
        }

        public IQueryable<Entrada> Get()
        {
            return entradasRepository.Get();
        }

        public Entrada Create(Entrada entrada)
        {
              return entradasRepository.Create(entrada);
        }

        public void Put(Entrada entrada)
        {
              entradasRepository.Put(entrada);
        }

        public Entrada Delete(long id)
        {
            return entradasRepository.Delete(id);
        }
    }
}