﻿using System;

namespace _03_CharactersInRange
{
	class Program
	{
		static void Main(string[] args)
		{
			char start = char.Parse(Console.ReadLine());
			char end = char.Parse(Console.ReadLine());

			PrintCharactersInRange(start, end);
		}

		private static void PrintCharactersInRange(char start, char end)
		{
			if (end < start)
			{
				var temp = start;
				start = end;
				end = temp;
			}

			for (int i = start + 1; i < end; i++)
			{
				Console.Write((char)i + " ");
			}
		}
	}
}
