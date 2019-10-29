﻿using System;
using System.Text;

namespace _00_CustomDataStructures
{
    public class CustomList
    {
        private int[] items;
        private const int InitialCapacity = 2;

        public CustomList()
        {
            this.items = new int[InitialCapacity];
            this.Count = 0;
        }

        public int Count { get; private set; }

        public int this[int index] 
        {
            get 
            {
                ValidateIndex(index);
                return this.items[index];
            }         
            set 
            {
                ValidateIndex(index);
                this.items[index] = value; 
            }
        }

        public void Add(int element)
        {
            Resize();

            this.items[this.Count++] = element;
        }

        public int RemoveAt(int index)
        {
            ValidateIndex(index);

            int element = this.items[index];

            this.ShiftToLeft(index);
            this.Count--;
            this.Shrink();

            return element;
        }

        public void InsertAt(int index, int element)
        {
            ValidateIndex(index);

            this.Count++;
            Resize();
            ShiftToRight(index);

            this.items[index] = element;
        }

        public bool Contains(int element)
        {
            for (int i = 0; i < this.Count; i++)
            {
                if(this.items[i] == element)
                {
                    return true;
                }
            }

            return false;
        }

        public void Swap(int firstIndex, int secondIndex)
        {
            ValidateIndex(firstIndex);
            ValidateIndex(secondIndex);

            int tmp = this.items[firstIndex];
            this.items[firstIndex] = this.items[secondIndex];
            this.items[secondIndex] = tmp;
        }

        public void Reverse()
        {
            for (int i = 0; i < this.Count / 2; i++)
            {
                Swap(i, this.Count - i - 1);
            }
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < this.Count - 1; i++)
            {
                sb.Append($"{this.items[i]}, ");
            }

            return sb.ToString().TrimEnd(' ', ',');
        }

        private void ValidateIndex(int index)
        {
            if (index < 0 || index >= this.Count)
            {
                throw new IndexOutOfRangeException();
            }
        }

        private void Resize()
        {
            if(this.items.Length > this.Count)
            {
                return;
            }

            int[] tempArray = new int[2 * this.items.Length];
            //Array.Copy(this.items, 0, tempArray, 0, this.items.Length);

            for (int i = 0; i < this.items.Length; i++)
            {
                tempArray[i] = this.items[i];
            }

            this.items = tempArray;
        }

        private void Shrink()
        {
            if(this.Count * 4 >= this.items.Length)
            {
                return;
            }

            int[] tempArray = new int[this.items.Length / 2];

            for (int i = 0; i < this.Count; i++)
            {
                tempArray[i] = this.items[i];
            }

            this.items = tempArray;
        }

        private void ShiftToLeft(int index)
        {
            for (int i = index; i < this.Count - 1; i++)
            {
                this.items[i] = this.items[i + 1];
            }

            this.items[this.Count - 1] = default;
        }

        public void ShiftToRight(int index)
        {
            for (int i = this.Count - 1; i > index; i--)
            {
                this.items[i] = this.items[i - 1];
            }
        }
    }
}
