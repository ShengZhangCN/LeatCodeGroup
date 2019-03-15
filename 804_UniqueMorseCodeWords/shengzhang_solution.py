class Solution:
    def uniqueMorseRepresentations(self, words: 'List[str]') -> 'int':
        mourse_codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
                        "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y', 'z']
        # create the alphabet-morse_code dict/map
        dct = {i: j for i, j in zip(alphabet, mourse_codes)}

        words_morse = []
        for word in words:
            # for each word in the 'words' list, we use the 'map' function to transfor each alphabet of word into morese_code.
            words_morse.append(''.join(list(map(dct.get, list(word)))))
        # return the len of set, which could tell the different morse_codes for all the words in the word list.
        return len(set(words_morse))
