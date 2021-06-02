# Typewriter

[![Maintainability](https://api.codeclimate.com/v1/badges/feec8e04113d5fdffb0e/maintainability)](https://codeclimate.com/github/Facebook-Developer-Circle-Moscow/Typewriter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/feec8e04113d5fdffb0e/test_coverage)](https://codeclimate.com/github/Facebook-Developer-Circle-Moscow/Typewriter/test_coverage)
[![Build Status](https://travis-ci.com/Facebook-Developer-Circle-Moscow/Typewriter.svg?branch=main)](https://travis-ci.com/Facebook-Developer-Circle-Moscow/Typewriter)

Typing practice tools

https://facebook-developer-circle-moscow.github.io/Typewriter/

TODO

- [x] Create application base and CI
- [ ] User chooses one of the practice options: typing, spelling, or writing
- [ ] Typing
    - [x] User can enter own text
    - [ ] User can select random text from database
        - [ ] Create database of essays based on IELTS examples
        - [ ] Add separation by complexity
    - [x] User presses Shift + Enter and start typing
        - [ ] During typing, we should measure typing speed and amount of errors
    - [ ] After typings ends, we need to display statistics
        - [ ] Show typing speed with chart
        - [ ] Show error count
        - [ ] Show fastest words
        - [ ] Show slowest words
        - [ ] Show error words
        - [ ] Add error words in practice list
- [ ] Spelling
    - [ ] User can insert own list of words for practice
    - [ ] User can get word for practice from database
        - [ ] Create database with words and descriptions
        - [ ] Split words in groups based on complexity
    - [ ] During practice user see word and it descriptions, then he see only description and try to type word
        - [ ] If word typed incorrectly, user type it 3 more times and words added increased repeat priority
        - [ ] if word typed correctly, word decreased priority
    - [ ] Add word pronunciation based on word phonetics
- [ ] Writing
    - [ ] User gets topic from database
        - [ ] Create database based on IELTS examples
    - [ ] User writes essay
        - [ ] Add word counter
        - [ ] Suspend spelling check
    - [ ] After user finished, check text automatically and give some suggestions 
        - [ ] Add spell check and add wrong words to the repeat list
- [ ] General
    - [ ] Add sound toggle
    - [ ] Add keys suggestion toggle
    - [ ] Add personal cabinet with history statistics
    