const characters = [
    {
        name: 'Human',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Wolf Hybrid',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Fox Hybrid',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Dragon Hybrid',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Dog Hybrid',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Cat Hybrid',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Moth Hybrid',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Harpy Hybrid',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Angel',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Fallen Angel',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Demon',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Vampire',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Werewolf',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: '',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Zombie',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        name: 'Naga',
        info: {
            name: 'Lorem ipsum',
            pronouns: 'dolor sit',
            age: 'amet',
            dob: 'consectetur',
            species: 'adipiscing',
            body: ['elit', 'sed do', 'eiusmod', 'tempor', 'incididunt'],
            clothing: ['ut labore', 'et dolore', 'magna aliqua', 'ut enim', 'ad minim'],
            abilities: 'veniam quis nostrud',
            personality: ['exercitation', 'ullamco laboris', 'nisi ut aliquip', 'ex ea commodo', 'consequat']
        },
        backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const characterList = document.getElementById('character-list');
    const content = document.getElementById('content');
    const searchInput = document.getElementById('search');

    let filteredCharacters = characters;

    function renderCharacterList() {
        characterList.innerHTML = '';
        filteredCharacters.forEach((character, index) => {
            const li = document.createElement('li');
            const dropdown = document.createElement('div');
            dropdown.className = 'dropdown';

            const toggle = document.createElement('button');
            toggle.className = 'dropdown-toggle';
            toggle.textContent = character.name;
            toggle.addEventListener('click', () => {
                const content = dropdown.querySelector('.dropdown-content');
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });

            const dropdownContent = document.createElement('div');
            dropdownContent.className = 'dropdown-content';

            const infoBtn = document.createElement('button');
            infoBtn.textContent = 'Info';
            infoBtn.addEventListener('click', () => showInfo(character));

            const backstoryBtn = document.createElement('button');
            backstoryBtn.textContent = 'Backstory';
            backstoryBtn.addEventListener('click', () => showBackstory(character));

            dropdownContent.appendChild(infoBtn);
            dropdownContent.appendChild(backstoryBtn);

            dropdown.appendChild(toggle);
            dropdown.appendChild(dropdownContent);
            li.appendChild(dropdown);
            characterList.appendChild(li);
        });
    }

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(query));
        renderCharacterList();
    });

    renderCharacterList();

    function showInfo(character) {
        const svg = getSpeciesSVG(character.name);
        content.innerHTML = `
            <div class="character-info active">
                <div class="decoration">${svg}</div>
                <h2>${character.name} - Info</h2>
                <div class="field">
                    <label>Name:</label>
                    <p>${character.info.name}</p>
                </div>
                <div class="field">
                    <label>Pronouns:</label>
                    <p>${character.info.pronouns}</p>
                </div>
                <div class="field">
                    <label>Age:</label>
                    <p>${character.info.age}</p>
                </div>
                <div class="field">
                    <label>D.O.B:</label>
                    <p>${character.info.dob}</p>
                </div>
                <div class="field">
                    <label>Species:</label>
                    <p>${character.info.species}</p>
                </div>
                <div class="field">
                    <label>Body:</label>
                    <ul>${character.info.body.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
                <div class="field">
                    <label>Clothing:</label>
                    <ul>${character.info.clothing.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
                <div class="field">
                    <label>Abilities/Notes:</label>
                    <p>${character.info.abilities}</p>
                </div>
                <div class="field">
                    <label>Personality:</label>
                    <ul>${character.info.personality.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            </div>
        `;
    }

    function showBackstory(character) {
        const svg = getSpeciesSVG(character.name);
        content.innerHTML = `
            <div class="character-info active">
                <div class="decoration">${svg}</div>
                <h2>${character.name} - Backstory</h2>
                <div class="backstory">
                    <h3>Backstory</h3>
                    <p>${character.backstory}</p>
                </div>
            </div>
        `;
    }

    function getSpeciesSVG(name) {
        // Simple SVG decorations based on species
        const svgs = {
            'Human': '<svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="#f0f0f0"/></svg>',
            'Wolf Hybrid': '<svg width="50" height="50"><polygon points="25,5 45,25 25,45 5,25" fill="#8B4513"/></svg>',
            'Fox Hybrid': '<svg width="50" height="50"><ellipse cx="25" cy="25" rx="20" ry="15" fill="#FF6347"/></svg>',
            'Dragon Hybrid': '<svg width="50" height="50"><path d="M10 40 L25 10 L40 40 Z" fill="#DC143C"/></svg>',
            'Dog Hybrid': '<svg width="50" height="50"><rect x="10" y="10" width="30" height="30" fill="#8B4513"/></svg>',
            'Cat Hybrid': '<svg width="50" height="50"><ellipse cx="25" cy="25" rx="15" ry="20" fill="#000000"/></svg>',
            'Moth Hybrid': '<svg width="50" height="50"><path d="M25 5 L35 15 L25 25 L15 15 Z" fill="#4B0082"/></svg>',
            'Harpy Hybrid': '<svg width="50" height="50"><polygon points="25,5 40,20 25,35 10,20" fill="#FFD700"/></svg>',
            'Angel': '<svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="#FFFFFF"/><path d="M15 15 L25 5 L35 15" stroke="#000" fill="none"/></svg>',
            'Fallen Angel': '<svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="#696969"/><path d="M15 15 L25 35 L35 15" stroke="#000" fill="none"/></svg>',
            'Demon': '<svg width="50" height="50"><polygon points="25,5 40,25 25,45 10,25" fill="#8B0000"/></svg>',
            'Vampire': '<svg width="50" height="50"><ellipse cx="25" cy="25" rx="20" ry="15" fill="#800080"/></svg>',
            'Werewolf': '<svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="#708090"/><path d="M15 15 L35 35" stroke="#000"/></svg>',
            'Zombie': '<svg width="50" height="50"><rect x="10" y="10" width="30" height="30" fill="#556B2F"/><path d="M15 15 L35 35 M35 15 L15 35" stroke="#000"/></svg>',
            'Naga': '<svg width="50" height="50"><path d="M10 30 Q25 10 40 30 L40 40 L10 40 Z" fill="#228B22"/></svg>'
        };
        return svgs[name] || '<svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="#f0f0f0"/></svg>';
    }
});