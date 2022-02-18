import "../custom.css";

export function titles() {
    return (
        [ "cryptography", 
            "tetris", 
            "checkers", 
            "huffman", ]
    );
}

export function dates() {
    return (
        { "cryptography" : "November 2021", 
          "tetris" : "August 2020 - December 2020", 
          "checkers" : "March 2021 - April 2021", 
          "huffman" : "October 2021 - November 2021", }
    );
}

export function languages() {
    return (
        { "cryptography" : "C and GMP",
          "tetris" : "Python and Pygame",
          "checkers": "Python and Pygame",
          "huffman" : "C"
        }
    );
}

export function names() {
    return (
        { "cryptography" : "Public Key Cryptography",
          "tetris" : "Tetris", 
          "checkers" : "Checkers", 
          "huffman" : "Huffman Coding", }
    );
}

export function info() {
    return (
        { "cryptography" : 
            ["This project was a school project that I had completed in the Fall of 2021 at UCSC and consists of three executables that emulate the process of RSA key generation and RSA algorithm." +
            " The program was broken down into three executables that help implement the key generation, file encryption, and file decryption using the aforementioned RSA algorithm.", <br className="newline" />,
            "The key generation was designed to create two RSA keys (public and private) that will enable the algorithm used to encrypt and decrypt files with a certain level of confidentiality" +
            " To generate the prime numbers associated with the resultant keys, the program uses the Miller-Rabin primality tests to efficiently identify highly probably prime numbers that satisfy the user's" +
            "specifications (number of bits that compose the key). ", <br className="newline" />, "The encrpytion program was designed to take either data from standard input or a specific file and encrypt the bytes with a specified " +
            "public key. Once encrypted, the program will either output the data to standard output or to a specified file.", <br className="newline" />, "The decryption program is similar to the encryption program except it " +
            "aims to decrypt encrypted files, whether they are inputted via standard input or a file. Similar to the encrypt program, the decrypted data will either be sent to standard output or a specified file.", <br className="newline" />,
            "This project was my first encounter with the GMP library, which allowed for integers larger than 64 bits and the possibility for more secure keys, and allowed me to experience C libraries" +
            " that I might have overlooked otherwise. Additionally, it was a good opportunity to practice reading documentation about things that I would not normally utilize."],

          "tetris" : 
            ["This project was my first large project that aims to recreate Tetris using Python and the Pygame module. The program is equipped with the majority of the aspects of the original game, including the" + 
            " increase drop speed/points gained with higher levels and the ability to soft/hard drop blocks.", <br className="newline" />, "Though there are numerous changes I would have implemented compared " + 
            "to the original design of the program, I found this project to be a perfect opportunity to put what I learned to use and complete something I could be proud of.", <br className="newline" />, 
            "Witht the completion of this project, I feel as though I was able to further develop my programming style and learn new skills/implementations that I can apply to future projects, which includes " + 
            "increasing the reusablity of code and partitioning code into separate files rather than clumping them all into a single file."], 

          "checkers" : 
            ["This project was the second rendition of my attempts to emulate a popular game, in this case, Checkers. The original idea was to allow two users to compete with each other, but I eventually " + 
            "decided to include a simple \"bot\" that a single user could play against. Although the \"bot\" is nothing compared to the computer AIs implemented by other game engines, I found the idea of " +
            "deciding which aspects would make a better move to be extremely interesting and fun to implement.", <br className="newline" />, "As for this project, I attempted to increase the readability " +
            "of the code and separate code into functions in hopes of having an easier time when adding features or fixing any possible bugs."],

          "huffman" : 
            ["This program was a school project that I had completed in the Fall of 2021 at UCSC and consists of two executables that emulate the process of Huffman Coding. Huffman coding is known as a" +
            " lossless data compression algorithm that is able to encode and decode data without losing any of the original data and attempts to reduce the number of bytes needed to convey the original data. ", <br className="newline" />,
            "The Huffman Coding program was broken down into two executables: one designed to use Huffman encoding to encode any file and attempt to reduce the size of the data while the other was designed to use Huffman" +
            " decoding to decode any encoded file. All encoded files will have a specific header containing a magic word to differentiate it from other files and meta data needed to decode the data.", <br className="newline" />, 
            "The Huffman encoding program aims to properly encode any data, whether it's from a file or from standard input, via Huffman coding and offer statistics regarding the space (bytes) saved. Note that it is " +
            "possible to lose space (use more bytes in the compression) with certain files.", <br className="newline" />, "As for the Huffman decoding program, it aims to take any encoded data (encoded via the encode executable" +
            "mentioned above) from standard input or a file and output the original data without any loss in data.", <br className="newline" />, "This project was one of my first experiences implementing numerous abstract data" +
            " types from scratch (stack, min heap, priority queue, and bit vector) and gain a deeper understanding of the characteristics of each. Additionally, through the use of lower level function calls such as " +
            "the read and write functions to emulate the more \"higher-level\" functions, I was able to understand how some of the functions I would commonly use (printf, scanf, etc.) was implemented" +
            " and realize the importance of understanding the tools you use."], }
    );
}

export function description() {
    return (
        { "cryptography" : "A program that emulates the process of RSA key generation and the RSA algorithm.",
          "tetris" : "A program that allows the user to play a game of tetris.",
          "checkers" : "A program that allows the user to play a game of checkers against a simple bot.",
          "huffman" : "A program that uses huffman coding to encode and decode any file.",
        }
    );
}

export function imgs() {
    const public_url = process.env.PUBLIC_URL
    return (
        { "tetris" : [public_url + "/images/tetris/tetris.mp4", 
                      public_url + "/images/tetris/thold.png",
                      public_url + "/images/tetris/tstart.png",],

          "huffman" : [public_url + "/images/huffman/huff.mp4", 
                       public_url + "/images/huffman/encode.png",
                       public_url + "/images/huffman/decode.png",
                       public_url + "/images/huffman/hw.png",],

          "cryptography" : [public_url + "/images/crypt/crypto.mp4", 
                            public_url + "/images/crypt/524.png",
                            public_url + "/images/crypt/decrypt.png",
                            public_url + "/images/crypt/encrypt.png",
                            public_url + "/images/crypt/keygen.png",
                            public_url + "/images/crypt/key.png",],

          "checkers" : [public_url + "/images/check/check.mp4",
                       public_url + "/images/check/cend.png",
                       public_url + "/images/check/cstart.png",],

        }
    );
}

export function previews() {
    const public_url = process.env.PUBLIC_URL
    return (
        { "tetris" : public_url + "/images/preview/tetris.mp4",
          "huffman" : public_url + "/images/preview/huffman.mp4",
          "cryptography" : public_url + "/images/preview/crypto.mp4",
          "checkers" : public_url + "/images/preview/checkers.mp4",
        }
    );
}


export function githubs() {
    return (
        { "cryptography" : "https://github.com/Edmondpoon/Public-Key-Cryptography",
          "tetris" : "https://github.com/Edmondpoon/Tetris",
          "checkers" : "https://github.com/Edmondpoon/2p-comp-checkers",
          "huffman" : "https://github.com/Edmondpoon/Huffman-Coding",
        }
    );
}

export function home_info() {
    return (
        "My name is Edmond Poon and welcome to my website. I'm currently a declared Computer Science major at the University of California - Santa Cruz and have an expected graduation date of June 2024. " + 
        " I have the most experience with the Python programming language, but have been actively experimenting with others, including C, C++, Ruby, and Javascript. Below are buttons that will " +
        "direct you to my portfolio, GitHub, LinkedIn, and resume, but the navbar above will also direct to their respective sections."
    );
}
