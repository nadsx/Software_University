﻿namespace AquaShop.Models.Aquariums
{
    public class FreshwaterAquarium : Aquarium
    {
        private const int Initial_Capacity = 50;

        public FreshwaterAquarium(string name) 
            : base(name, Initial_Capacity)
        {
        }
    }
}