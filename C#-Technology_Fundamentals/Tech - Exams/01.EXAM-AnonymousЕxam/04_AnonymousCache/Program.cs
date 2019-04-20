﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace _04_AnonymousCache
{
	class Program
	{
		static void Main(string[] args)
		{
			var data = new Dictionary<string, Dictionary<string, long>>();
			var cache = new Dictionary<string, Dictionary<string, long>>();

			string inputLine = string.Empty;

			while ((inputLine = Console.ReadLine()) != "thetinggoesskrra")
			{
				string[] inputParameters = inputLine
					.Split(new[] { ' ', '-', '>', '|' }, StringSplitOptions.RemoveEmptyEntries);

				if (inputParameters.Length == 1)
				{
					string dataSet = inputParameters[0];

					if (cache.ContainsKey(dataSet))
					{
						data[dataSet] = new Dictionary<string, long>(cache[dataSet]);
						cache.Remove(dataSet);
					}
					else
					{
						data[dataSet] = new Dictionary<string, long>();
					}
				}
				else
				{
					string dataKey = inputParameters[0];
					long dataSize = long.Parse(inputParameters[1]);
					string dataSet = inputParameters[2];

					if (!data.ContainsKey(dataSet))
					{
						if (!cache.ContainsKey(dataSet))
						{
							cache[dataSet] = new Dictionary<string, long>();
						}

						cache[dataSet][dataKey] = dataSize;
					}
					else
					{
						data[dataSet][dataKey] = dataSize;
					}
				}
			}

			if (data.Count > 0)
			{
				KeyValuePair<string, Dictionary<string, long>> result = data
					.OrderByDescending(ds => ds.Value.Sum(d => d.Value))
					.First();

				Console.WriteLine($"Data Set: {result.Key}, Total Size: {result.Value.Sum(d => d.Value)}");

				string prefix = "$.";

				foreach (var value in result.Value)
				{
					Console.WriteLine($"{prefix}{value.Key}");
				}
			}
		}
	}
}
