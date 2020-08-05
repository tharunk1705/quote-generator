const quoteEl = document.querySelector('#quote');
const authorEl = document.querySelector('.quote-author')
const btn = document.querySelector('button');
btn.addEventListener('click',quoteGeneratorFun);


let quotes =[
    {
        quote : "I happen to feel that the degree of a person's intelligence is directly reflected by the number of conflicting attitudes she can bring to bear on the same topic.",
        author : "Lisa Alther",
    },
    {
        quote : "Though with those streams he no resemblance hold, Whose foam is amber and their gravel gold; His genuine and less guilty wealth t' explore, Search not his bottom, but survey his shore.",
        author : "John Denham",
    },
    {
        quote : "Discontent is the want of self-reliance: it is infirmity of will.",
        author : "Ralph Waldo Emerson",
    },
    {
        quote : "I testify that our teacher, our shepherd, is Christ, our best friend, who clears up all our doubts. He heals our wounds and turns our pain into sweet experiences.",
        author : "Horacio A. Tenorio",
    },
    {
        quote : "It takes a man to make a devil; and the fittest man for such a purpose is a snarling, waspish, red-hot, fiery creditor.",
        author : "Henry Ward Beecher",
    },
    {
        quote : "The one thing in the world, of value, is the active soul.",
        author : "Ralph Waldo Emerson",
    },
    {
        quote : "GRAVE, n. A place in which the dead are laid to await the coming of the medical student.",
        author : "Ambrose Gwinett Bierce",
    },
    {
        quote : "The man who listens to Reason is lost; Reason enslaves all whose minds are not strong enough to master her.",
        author : "George Bernard Shaw",
    },
    {
        quote : "Don’t let the noise of others’ opinions drown out your own inner voice.",
        author : "Steve Jobs",
    },
    {
        quote : "Creativity is just connecting things.",
        author : "Steve Jobs",
    },
    {
        quote : "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
        author : "Steve Jobs",
    },
    {
        quote : "Your time is limited, so don’t waste it living someone else’s life.",
        author : "Steve Jobs",
    },
    {
        quote : "Stay hungry. Stay foolish.",
        author : "Steve Jobs",
    },
    {
        quote : "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
        author : "Alan Turing",
    },
    {
        quote : "Those who can imagine anything, can create the impossible.",
        author : "Alan Turing",
    },

]
function quoteGeneratorFun() {
    let random = Math.floor(Math.random()*quotes.length);

    quoteEl.textContent = quotes[random].quote;
    authorEl.textContent = quotes[random].author;

}