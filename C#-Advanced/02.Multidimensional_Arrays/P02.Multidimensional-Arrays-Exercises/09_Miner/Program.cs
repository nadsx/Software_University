using System;
using System.Collections.Generic;
using System.Linq;

namespace _09_Miner
{
	class Program
	{
		static void Main(string[] args)
		{
			int fieldSize = int.Parse(Console.ReadLine());
			string[] commands = Console.ReadLine()
				.Split(" ", StringSplitOptions.RemoveEmptyEntries)
				.ToArray();

			List<int[]> coalIndexes = new List<int[]>();
			int[] playerIndex = new int[2];
			int[] endIndex = new int[2];

			for (int row = 0; row < fieldSize; row++)
			{
				char[] currentLine = Console.ReadLine()
					.Split(" ", StringSplitOptions.RemoveEmptyEntries)
					.Select(char.Parse)
					.ToArray();

				for (int col = 0; col < currentLine.Length; col++)
				{
					if (currentLine[col] == 'c')
					{
						coalIndexes.Add(new int[] { row, col });
					}
					else if (currentLine[col] == 'e')
					{
						endIndex = new int[] { row, col };
					}
					else if (currentLine[col] == 's')
					{
						playerIndex = new int[] { row, col };
					}
				}
			}

			for (int i = 0; i < commands.Length; i++)
			{
				string command = commands[i];

				switch (command)
				{
					case "up":
						if (IsValidIndex(playerIndex[0] - 1, playerIndex[1], fieldSize))
						{
							playerIndex[0] -= 1;
						}
						break;
					case "right":
						if (IsValidIndex(playerIndex[0], playerIndex[1] + 1, fieldSize))
						{
							playerIndex[1] += 1;
						}
						break;
					case "down":
						if (IsValidIndex(playerIndex[0] + 1, playerIndex[1], fieldSize))
						{
							playerIndex[0] += 1;
						}
						break;
					case "left":
						if (IsValidIndex(playerIndex[0], playerIndex[1] - 1, fieldSize))
						{
							playerIndex[1] -= 1;
						}
						break;
				}

				if (coalIndexes.Exists(x => x.SequenceEqual(playerIndex)))
				{
					for (int j = 0; j < coalIndexes.Count; j++)
					{
						if (coalIndexes[j].SequenceEqual(playerIndex))
						{
							coalIndexes.RemoveAt(j);
							break;
						}
					}

					if (coalIndexes.Count == 0)
					{
						Console.WriteLine($"You collected all coals! ({playerIndex[0]}, {playerIndex[1]})");
						return;
					}
				}
				else if (endIndex.SequenceEqual(playerIndex))
				{
					Console.WriteLine($"Game over! ({playerIndex[0]}, {playerIndex[1]})");
					return;
				}
			}

			Console.WriteLine($"{coalIndexes.Count} coals left. ({playerIndex[0]}, {playerIndex[1]})");
		}

		private static bool IsValidIndex(int row, int col, int fieldSize)
		{
			return (row >= 0 && row < fieldSize) && (col >= 0 && col < fieldSize);
		}
	}
}
