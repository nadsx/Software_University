﻿using System;

namespace _06_CalculateRectangleArea
{
	class Program
	{
		static void Main(string[] args)
		{
			double width = double.Parse(Console.ReadLine());
			double height = double.Parse(Console.ReadLine());

			double area = GetRectangleArea(width, height);

			Console.WriteLine(area);
		}

		private static double GetRectangleArea(double width, double height)
		{
			return width * height;
		}
	}
}
