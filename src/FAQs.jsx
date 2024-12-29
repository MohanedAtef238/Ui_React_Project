import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; 
import './assets/Sources/css/FAQs.css'; 

function FAQs() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question: 'How can I choose the best travel destination for my next trip?',
      answer:
        "Selecting the best destination depends on your interests, budget, and travel goals. Consider factors such as the type of experience you want (relaxation, adventure, culture), the climate, local attractions, and available activities. Our website's featured destinations and detailed guides can help you make an informed choice.",
    },
    {
      question: 'What are some tips for planning a budget-friendly vacation?',
      answer:
        'To plan a budget-friendly vacation:\n- Travel during the off-season to avoid high prices.\n- Book flights and accommodations in advance to secure lower rates.\n- Explore local options for food and transportation instead of expensive tourist alternatives.\n- Use our site\'s search feature to find destinations that fit your budget and preferences.',
    },
    {
      question: 'What essential items should I pack for an international trip?',
      answer:
        'Packing essentials include passports, travel documents, appropriate clothing for the destination\'s climate, medication, and travel-sized toiletries. Consider a power adapter for international outlets and always carry a copy of important documents for emergencies.',
    },
    {
      question: 'How do I ensure a safe travel experience in a new destination?',
      answer:
        'To stay safe:\n- Research the local customs, laws, and emergency contacts before your trip.\n- Avoid carrying large sums of cash or displaying valuables.\n- Stay in well-reviewed accommodations and use trusted transportation options.\n- Explore our destination safety tips for more insights.',
    },
  ];

  return (
    <div className="wrapper">
      {/* Use Helmet to set the title */}
      <Helmet>
        <title> FAQs:</title>
      </Helmet>
      <div className="accordion" style={{ marginTop: '20px' }}>
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
