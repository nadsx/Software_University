﻿using System;

namespace _07_RawData
{
    public class Cargo
    {
        public Cargo(int cargoWeight, string cargoType)
        {
            this.CargoWeight = cargoWeight;
            this.CargoType = cargoType;
        }

        public int CargoWeight { get; set; }

        public string CargoType { get; set; }
    }
}