using System;
using System.IO;

namespace _02_LineNumbers
{
	class Program
	{
		static void Main(string[] args)
		{
			using (var reader = new StreamReader("Input.txt"))
			{
				using (var writer = new StreamWriter("Output.txt", true))
				{
					int counter = 1;

					while (true)
					{
						string currentLine = reader.ReadLine();

						if (currentLine == null)
						{
							break;
						}

						currentLine = $"{counter}. {currentLine}";
						counter++;

						writer.WriteLine(currentLine);
					}
				}
			}
		}
	}
}
