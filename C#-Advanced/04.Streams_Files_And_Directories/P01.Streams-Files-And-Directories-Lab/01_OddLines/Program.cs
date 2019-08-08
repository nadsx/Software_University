using System;
using System.IO;

namespace _01_OddLines
{
	class Program
	{
		static void Main(string[] args)
		{
			using (var reader = new StreamReader("../../../Input.txt"))
			{
				int counter = 0;

				while (true)
				{
					string currentLine = reader.ReadLine();

					if (currentLine == null)
					{
						break;
					}

					if (counter % 2 != 0)
					{
						Console.WriteLine(currentLine);
					}

					counter++;
				}
			}
		}
	}
}
