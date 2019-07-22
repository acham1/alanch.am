# classy-sv
A classy way to read CSV files.

# About "Seven Languages in Seven Weeks" by Bruce Tate
classy-sv is an answer to the Day 3 challenge on Ruby meta-programming, extending from the ActsAsCsv module. In the spirit of having fun with Ruby, this implementation leverages language features like method overriding, module-powered mixins, mixin-powered macros. The result is a cute DSL for CSV parsing.

## Usage
Given a CSV file `foobar.csv` in the process's current working directory, simply read its contents by defining and using a class, like so:

_./fruit.csv_
```
Apple, Banana, Pineapple
data-0-0, data-0-1, data-0-0
data-1-0, data-1-1, data-1-2
```

_application source_
```
class Fruit
    include ActsAsCsv
    acts_as_csv
end

FooBar.each do |row|
    puts "Apple: #{row.apple}"
    puts "Banana: #{row.banana}"
    puts "Pineapple: #{row.pineapple}"
end

FooBar.headers[0] == "Apple" # true
FooBar.csv_contents[0] == "data-0-0" # true
```

## Roadmap
- [ ] Support for quoted values
- [ ] Support for overriding default file name
- [ ] Support for custom mappings from column headings to accessor names
- [ ] Support for writing changes to CSV

## Known Limitations
- classy-sv does not handle quoted values or values including commas (escaped or otherwise).

