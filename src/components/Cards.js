import React from 'react'

const cardsData = [
    { id: 1, title: "Mobile", description: "+254 720 975 755" },
    { id: 2, title: "Email", description: "leratocreationskenya@gmail.com." },
    { id: 3, title: "Website", description: "www.leratocreationskenya.com" },
    { id: 4, title: "Location", description: "Nairobi, Kenya." },

];


const Cards = () => {
    return (
        <section id="cards-section" className="px-8 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cardsData.map(card => (
                    <div key={card.id} className="bg-white shadow-md rounded-lg p-6 card">
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards