fetch('http://localhost:3000/dashboard_data')
    .then(response => response.json())
    .then(data => {
        const subjectDataArray = [];

        data.forEach(subjectItem => {
            const subjectObj = {
                subject: subjectItem.subject,
                avg_rating: parseFloat(subjectItem.avg_rating).toFixed(2),
                comments: subjectItem.comments.map(commentItem => {
                    return {
                        comment: commentItem.comment,
                        student_group: commentItem.student_group
                    };
                })
            };

            subjectDataArray.push(subjectObj);
        });
        console.log(subjectDataArray);

        setRatingWidth(subjectDataArray[1].avg_rating * 20);

        const dashboardDiv = document.getElementById('dashboardData');
        subjectDataArray.forEach(subject => {
            const subjectBlock = document.createElement('div');
            subjectBlock.innerHTML = `
                    <h2>${subject.subject} (Average Rating: ${subject.avg_rating})</h2>
                `;

            subject.comments.forEach(comment => {
                const commentBlock = document.createElement('div');
                commentBlock.innerHTML = `
                        <p><strong>Group:</strong> ${comment.student_group}</p>
                        <p><strong>Comment:</strong> ${comment.comment}</p>
                    `;
                subjectBlock.appendChild(commentBlock);
            });

            dashboardDiv.appendChild(subjectBlock);
        });

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const ratingRect = document.getElementById('rating');

function setRatingWidth(percentage) {
    ratingRect.style.width = `${percentage}%`;
}