

let vue = new Vue ({
    el: '#app',
    data : {
        poetry:[
            {
                id: 1,
                title: 'Beautiful Chaos',
                Description: 'Sometimes there isn\'t just one answer or one choice. Sometimes there\'s no going back. And this time there won\'t be a happy ending.',
                imgsrc: 'KurdishReaders-imgs/poetry001.jpg'
            },
            {
                id: 2,
                title: 'Mind Platter',
                Description: 'To the heart in you, don’t be afraid to feel.\n' +
                    'To the sun in you, don’t be afraid to shine.\n' +
                    'To the love in you, don’t be afraid to heal.\n' +
                    'To the ocean in you, don’t be afraid to rage.\n' +
                    'To the silence in you, don’t be afraid to break.',
                imgsrc: 'KurdishReaders-imgs/poetry002.jpg'
            },
            {
                id: 3,
                title: 'Science: The Stars in Me Are the Stars in You.',
                Description: 'We all are broken and broken is its own kind of beautiful.',
                imgsrc: 'KurdishReaders-imgs/poetry003.jpg'
            }

        ],
        classics:[
            {
                id: 1,
                title: 'Crime and Punishment\n',
                Description: 'Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.',
                imgsrc: 'KurdishReaders-imgs/classics001.jpg'
            },
            {
                id: 2,
                title: 'Pride and Prejudice',
                Description: 'Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.',
                imgsrc: 'KurdishReaders-imgs/classics002.jpg'
            },
            {
                id: 3,
                title: 'Fahrenheit 451',
                Description: 'So now do you see why books are hated and feared? They show the pores in the face of life. The comfortable people want only wax moon faces, poreless, hairless, expressionless.',
                imgsrc: 'KurdishReaders-imgs/classics003.jpg'
            }
            ],
        nonfiction:[
            {
                id: 1,
                title: 'Astrophysics for People in a Hurry',
                Description: 'We do not simply live in this universe. The universe lives within us.',
                imgsrc: 'KurdishReaders-imgs/nonfiction001.jpg'
            },
            {
                id: 2,
                title: 'Elon Musk',
                Description: 'You should take the approach that you’re wrong. Your goal is to be less wrong.',
                imgsrc: 'KurdishReaders-imgs/nonfiction002.jpg'
            },
            {
                id: 3,
                title: 'Man\'s Search for Meaning',
                Description: 'Those who have a \'why\' to live, can bear with almost any \'how\'.',
                imgsrc: 'KurdishReaders-imgs/nonfiction003.jpg'
            }
            ],
        fantasy:[
            {
                id: 1,
                title: 'Harry Potter and the Cursed Child',
                Description: 'Those we love never truly leave us, Harry. There are things that death cannot touch.',
                imgsrc: 'KurdishReaders-imgs/fantasy001.jpg'
            },
            {
                id: 2,
                title: 'Mythology',
                Description: 'He drew iron tears down Pluto\'s cheek and make Hell grant what Love did seek. ',
                imgsrc: 'KurdishReaders-imgs/fantasy002.jpg'
            },
            {
                id: 3,
                title: 'The Testaments',
                Description: 'You don’t believe the sky is falling until a chunk of it falls on you.',
                imgsrc: 'KurdishReaders-imgs/fantasy003.jpg'
            }
            ],
        sciencefiction:[
            {
                id: 1,
                title: 'Space Academy',
                Description: 'The daughter of a powerful alien warlord has been kidnapped, and all the evidence points to Jayden as her abductor. Forced to go on the run, Jayden allies with a mysterious figure who is not what he appears. Will Jayden prove his innocence, or will he be destroyed?',
                imgsrc: 'KurdishReaders-imgs/sciencefiction001.jpg'
            },
            {
                id: 2,
                title: 'To Sleep in a Sea of Stars',
                Description: 'Suffering was inescapable, but to care for another and to be cared for in turn—that was the closest any person might come to heaven.',
                imgsrc: 'KurdishReaders-imgs/sciencefiction002.jpg'
            },
            {
                id: 3,
                title: 'Line of Fire',
                Description: 'One chance to impress his father. One gambit to save the fleet. One mistake that could destroy them all.',
                imgsrc: 'KurdishReaders-imgs/sciencefiction003.jpg'
            }
            ],
        thrillers:[
            {
                id: 1,
                title: 'They came to Baghdad',
                Description: 'He’s very nice,” said Mrs. Clayton, “but not quite quite, you know. Hasn’t got any idea of culture.” Richard found his room exceedingly comfortable, and his appreciation of Mrs. Clayton as a hostess rose still higher.',
                imgsrc: 'KurdishReaders-imgs/thrillers001.jpg'
            },
            {
                id: 2,
                title: 'Classic Tales of Horror',
                Description: 'Not for those of a nervous disposition, this chilling collection contains some of Edgar Allan Poe\'s best known stories, including The Fall of the House of Usher and The Masque of the Red Death.',
                imgsrc: 'KurdishReaders-imgs/thrillers002.jpg'
            },
            {
                id: 3,
                title: 'Murder in Mesopotamia',
                Description: 'It seems odd that as far as I know nobody has yet been murdered for having too perfect a character! And yet perfection is undoubtedly an irritating thing!',
                imgsrc: 'KurdishReaders-imgs/thrillers003.jpg'
            }
            ],
        historical:[
            {
                id: 1,
                title: 'A Secret History of Witches',
                Description: 'Your father, like most men, is terrified of a woman who doesn’t fit his ideal of womanhood, because he doesn’t know how to control her. You need to remember that any frightened man is a dangerous one.',
                imgsrc: 'KurdishReaders-imgs/history001.jpg'
            },
            {
                id: 2,
                title: 'Honor',
                Description: 'Never had it occurred to him that you could deceive the person you held dear. It was his first lesson in the complexity of love.',
                imgsrc: 'KurdishReaders-imgs/history002.jpg'
            },
            {
                id: 3,
                title: 'Burial Rites',
                Description: 'It’s not fair. People claim to know you through the things you’ve done, and not by sitting down and listening to you speak for yourself.',
                imgsrc: 'KurdishReaders-imgs/history003.jpg'
            }
        ],
        memooirs:[
            {
                id: 1,
                title: 'The Strangers on a Bridge',
                Description: 'Jonny, together with Rethink Mental Illness launch a campaign with a short video clip so that Jonny could finally thank that stranger who save him from suicide.',
                imgsrc: 'KurdishReaders-imgs/memoirs001.jpg'
            },
            {
                id: 2,
                title: 'Man\'s Search for Meaning',
                Description: 'Those who have a \'why\' to live, can bear with almost any \'how\'.',
                imgsrc: 'KurdishReaders-imgs/memoirs002.jpg'
            },
            {
                id: 3,
                title: 'When Breath Becomes Air',
                Description: 'Human knowledge is never contained in one person. It grows from the relationships we create between each other and the world, and still it is never complete.',
                imgsrc: 'KurdishReaders-imgs/memoirs003.jpg'
            }
            ],
        contemporary:[
            {
                id: 1,
                title: 'Simon vs. the Homo Sapiens Agenda',
                Description: 'White shouldn\'t be the default any more than straight should be the default. There shouldn\'t even be a default.',
                imgsrc: 'KurdishReaders-imgs/contemporary001.jpg'
            },
            {
                id: 2,
                title: 'Wonder',
                Description: 'Kinder than is necessary. Because it\'s not enough to be kind. One should be kinder than needed.',
                imgsrc: 'KurdishReaders-imgs/contemporary002.jpg'
            },
            {
                id: 3,
                title: 'Far from the Tree',
                Description: 'That’s what parents do. They catch you before you fall. That’s what family is.',
                imgsrc: 'KurdishReaders-imgs/contemporary003.jpg'
            }
        ],
        search:'',
    },
    methods : {

    }
})






