
def word_count(text)
  words = text.split(" ")
  freq = Hash.new(0)
  words.each { |word| freq[word.downcase] += 1 }
  freq
end

input = "TalentFlow is amazing and amazing people build TalentFlow"
result = word_count(input)
result.each { |word, count| puts "#{word}: #{count}" }
