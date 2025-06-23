using System;
using System.IO;

class FileMonitor {
    static void Main() {
        string path = "log.txt";
        if (!File.Exists(path)) {
            File.WriteAllText(path, "Log Start\n");
        }
        File.AppendAllText(path, $"Checked at {DateTime.Now}\n");
        Console.WriteLine("Log file updated.");
    }
}
