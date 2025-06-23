fn parse_command(input: &str) -> Vec<&str> {
    input.split_whitespace().collect()
}

fn main() {
    let command = "upload file to bucket";
    let tokens = parse_command(command);
    println!("Parsed command tokens:");
    for token in tokens {
        println!("{}", token);
    }
}
