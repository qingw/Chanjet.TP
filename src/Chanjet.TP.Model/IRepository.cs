﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Chanjet.TP.Model
{
    public interface IRepository<T> where T : class
    {
        void Insert(T entity);
        void Update(T entity);
        void Delete(T entity);
        T GetById(long id);
        T GetById(string id);
        IEnumerable<T> GetAll();

    }
}
