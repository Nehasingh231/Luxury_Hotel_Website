import React, { useState } from 'react';
import './CommentSection.css';
import { FaReply, FaEdit, FaEnvelope, FaGlobe, FaSearch } from 'react-icons/fa';

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Olivia West',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '27 December 2023 at 10:00 AM',
      replies: []
    },
    {
      id: 2,
      name: 'David Craigh',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      date: '27 December 2023 at 10:00 AM',
      replies: []
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
    parentId: null // For replies
  });

  const [errors, setErrors] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.comment.trim()) newErrors.comment = 'Comment is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const newComment = {
      id: Date.now(),
      name: formData.name,
      text: formData.comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' at ' + new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      replies: []
    };

    if (formData.parentId) {
      // Add as a reply
      setComments(prev => prev.map(comment => {
        if (comment.id === formData.parentId) {
          return {
            ...comment,
            replies: [...comment.replies, newComment]
          };
        }
        return comment;
      }));
    } else {
      // Add as a new comment
      setComments(prev => [...prev, newComment]);
    }

    // Reset form
    setFormData({
      name: '',
      email: '',
      website: '',
      comment: '',
      parentId: null
    });
    setReplyingTo(null);
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
    setFormData(prev => ({
      ...prev,
      parentId: commentId
    }));
    // Scroll to form
    document.querySelector('.commentsection-form').scrollIntoView({ behavior: 'smooth' });
  };

  const renderComments = (commentList) => {
    return commentList.map(comment => (
      <div key={comment.id} className="commentsection-comment">
        <div className="commentsection-avatar" />
        <div className="commentsection-text">
          <h4>{comment.name}</h4>
          <p>{comment.text}</p>
          <div className="commentsection-meta">
            <span>{comment.date}</span>
            <button 
              onClick={() => handleReply(comment.id)} 
              className="commentsection-reply"
            >
              Reply <FaReply />
            </button>
          </div>
          
          {/* Render replies if any */}
          {comment.replies.length > 0 && (
            <div className="commentsection-replies">
              {renderComments(comment.replies)}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="commentsection-container">
      <section className="commentsection-feedback">
        <h5 className="commentsection-subheading">READERS FEEDBACK</h5>
        <h2 className="commentsection-heading">{comments.length} Comment{comments.length !== 1 ? 's' : ''}</h2>

        {renderComments(comments)}
      </section>

      <section className="commentsection-form">
        <h5 className="commentsection-subheading">GIVE FEEDBACK</h5>
        <h2 className="commentsection-heading">
          {replyingTo ? 'Leave A Reply' : 'Leave A Comment'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="commentsection-input-group">
            <div className="commentsection-field">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name Here" 
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              <FaEdit className="commentsection-icon" />
              {errors.name && <span className="commentsection-error">{errors.name}</span>}
            </div>
            <div className="commentsection-field">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email Here" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              <FaEnvelope className="commentsection-icon" />
              {errors.email && <span className="commentsection-error">{errors.email}</span>}
            </div>
          </div>

          <div className="commentsection-field full">
            <input 
              type="text" 
              name="website"
              placeholder="Website Address Here (optional)" 
              value={formData.website}
              onChange={handleChange}
            />
            <FaGlobe className="commentsection-icon" />
          </div>

          <div className="commentsection-field full">
            <textarea 
              name="comment"
              placeholder="Your Comment Here" 
              value={formData.comment}
              onChange={handleChange}
              className={errors.comment ? 'error' : ''}
            />
            <FaSearch className="commentsection-icon" />
            {errors.comment && <span className="commentsection-error">{errors.comment}</span>}
          </div>

          <button type="submit" className="commentsection-submit">
            {replyingTo ? 'Post Reply' : 'Post A Comment'} <FaReply />
          </button>

          {replyingTo && (
            <button 
              type="button" 
              className="commentsection-cancel"
              onClick={() => {
                setReplyingTo(null);
                setFormData(prev => ({ ...prev, parentId: null }));
              }}
            >
              Cancel Reply
            </button>
          )}
        </form>
      </section>
    </div>
  );
};

export default CommentSection;