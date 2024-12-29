import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogDetails.css';
import '../styles/SocialMedia.css';

const BlogDetails = () => {
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')) || []);
    const [commentInput, setCommentInput] = useState('');

    useEffect(() => {
        console.log('BlogDetails loaded');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        document.head.appendChild(link);

        // Clean up to remove link tag when component unmounts
        return () => {
            document.head.removeChild(link);
        };    }, []);

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const comment = commentInput.trim();
        if (!comment) {
            alert('Please enter a comment.');
            return;
        }
        setComments([...comments, comment]);
        localStorage.setItem('comments', JSON.stringify([...comments, comment]));
        setCommentInput('');
    };

    const handleDeleteComment = (index) => {
        if (window.confirm('Do you want to delete this comment?')) {
            const newComments = comments.filter((_, i) => i !== index);
            setComments(newComments);
            localStorage.setItem('comments', JSON.stringify(newComments));
        }
    };

    return (
        <>
            <header>
                <div className="Blog-intro" data-aos="fade-up" data-aos-delay="100">
                    <div className="img-container">
                        <img src="/img/blogss/DEgypt.jpg" alt="Egypt Pyramids" />
                        <div className="caption">Taken by: Ahmed Elmagnon</div>
                    </div>
                </div>
                <div className="title-container">
                    <h1 style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '30px' }}>Pyramids are Overrated ?</h1>
                </div>
            </header>
            <section className="about-section">
                <div className="row">
                    <div className="detailed" data-aos="fade-up" data-aos-delay="200">
                        <div className="about-content">
                            <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>well, i got a lot of words i want to say about this trip <br /></h3>
                            <ul style={{ listStyleType: 'square' }}>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The long wait in the ticket line was extremely frustrating. Despite arriving early in the morning to beat the crowd, the queue moved at a snail's pace, making the process seem endless. To make matters worse, the scorching sun blazed overhead, and there was no shade or seating available to provide even a moment of relief. By the time I finally reached the ticket counter, I was already drained, which diminished my excitement for the visit.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The persistent street vendors were overwhelming and relentless. They followed me around the area, trying to sell souvenirs, camel rides, or bottled water, often at prices that were outrageously high. No matter how many times I politely declined, they continued to push their offers, and some even became aggressive when I ignored them. It felt like there was no escape from their persistence, which made it difficult to enjoy the surroundings in peace.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The tour guide I hired turned out to be unprofessional and a major letdown. While I was hoping for detailed explanations and insights about the history of the pyramids, he rushed through the key points, skipping important details and barely giving me time to take photos or appreciate the site. On top of that, he seemed more interested in directing me to gift shops where he likely earned commissions, rather than focusing on the actual tour. It felt like a waste of money.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The area was surprisingly littered in some spots, which was disappointing for such a renowned historic site. Plastic bottles, snack wrappers, and even cigarette butts were scattered in certain corners, taking away from the beauty and significance of the pyramids. I had imagined the location to be pristine and well-maintained, but the lack of proper waste management and awareness among visitors was disheartening. It made me wonder why more wasn’t being done to preserve this treasure.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The camel ride I booked ended up being a disaster from start to finish. Initially, the handler appeared friendly, but halfway through the ride, he stopped and demanded an extra payment, claiming it was a "special fee." When I refused to pay, he became rude and insisted that I dismount immediately. Feeling intimidated, I reluctantly agreed, and the whole experience left me feeling cheated and frustrated. What should have been a memorable experience turned into a regret.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The heat was unbearable, and the lack of facilities to cope with it made the situation worse. There were very few shaded areas to escape the harsh sun, and the minimal availability of water vendors forced me to ration what I had brought with me. The combination of exhaustion, dehydration, and heat left me feeling drained within the first hour of my visit. It was challenging to focus on the beauty of the site when I was constantly battling discomfort.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        Navigating through the site was confusing due to the lack of clear signs and directions. With so many pathways and areas to explore, I often found myself wandering aimlessly or heading in the wrong direction. This not only wasted precious time but also made it difficult to plan my visit efficiently. I had to rely on asking other visitors for help, which added unnecessary stress to what should have been a relaxing and organized experience.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        I was shocked by how crowded the area was, even though I visited during what was supposed to be an off-peak time. The sheer number of tourists made it nearly impossible to take a decent photo without dozens of people in the background. The noise from the crowds, combined with the chaotic atmosphere, made it hard to fully appreciate the grandeur and serenity of the pyramids. Instead of feeling awestruck, I felt overwhelmed and impatient.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The entry prices for foreign visitors were significantly higher than for locals, which felt unfair and left a bad impression. While I understand the rationale behind charging tourists more, the discrepancy was so large that it felt exploitative. On top of that, I later learned that the ticket did not include access to certain parts of the site, which required additional payment. This left me feeling like the experience was more about making money than showcasing history.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        The security measures were inconsistent and sometimes felt more like an opportunity for bribes. Some guards openly asked for tips in exchange for allowing me to explore restricted areas or skip certain rules. This lack of professionalism made the visit feel less safe and tarnished the overall experience. Instead of being reassured by their presence, I found myself questioning the integrity of the site's management and their priorities.
                                    </p>
                                </li>
                                <li>
                                    <p className="description" style={{ fontWeight: 500, fontSize: '12px' }}>
                                        There was limited access to clean restrooms, and the ones that were available were poorly maintained. The long lines, lack of proper sanitation, and absence of basic supplies like soap or toilet paper made the experience uncomfortable and frustrating. For such a popular tourist destination, I expected better facilities, and the poor condition of the restrooms was a significant inconvenience during my visit.
                                    </p>
                                </li>
                            </ul>

                            <div className="author-date">
                                <Link to="/blog-author" className="Author">Ahmed El-Sayed</Link>
                                <p className="date">Date: 12/7/2021</p>
                            </div>
                            <div className="social-media">
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-twitter"></a>
                                <a href="#" className="fa fa-google"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-reddit"></a>
                            </div>
                            <section className="comments">
                                <h2>Comments</h2>
                                <form id="comment" onSubmit={handleCommentSubmit}>
                                    <textarea
                                        id="commentInput"
                                        placeholder="Leave a comment"
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
                                    ></textarea>
                                    <button type="submit">Submit</button>
                                </form>
                                <div id="commentList">
                                    {comments.map((comment, index) => (
                                        <div key={index} style={{
                                            border: '1px solid #ccc',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            marginBottom: '10px',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                            backgroundColor: '#f9f9f9',
                                        }}>
                                            <p style={{ fontWeight: 'bold', margin: '0 0 8px', fontSize: '16px' }}>{comment}</p>
                                            <button
                                                onClick={() => handleDeleteComment(index)}
                                                style={{
                                                    backgroundColor: '#ff4d4d',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    padding: '5px 10px',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    transition: 'background-color 0.3s ease',
                                                }}
                                                onMouseOver={(e) => e.target.style.backgroundColor = '#ff1a1a'}
                                                onMouseOut={(e) => e.target.style.backgroundColor = '#ff4d4d'}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <Link to="/blog-list" className="back">
                                <span className="button-text">Back to Blogs</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;
