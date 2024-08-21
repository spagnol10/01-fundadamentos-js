import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/spagnol10.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title='11 de Maio às 08:33'
                dateTime="2022-05-11 08:33:24"> Comentado há 1h atrás
              </time>
            </div>
            <button title='Deletar commentário'>
              <Trash onClick={handleDeleteComment} size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}