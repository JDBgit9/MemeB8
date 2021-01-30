import React from 'react'

function Modal({header, body, footer, modalState}) {
    return (
        <div className="modal">
            <div className="close" onClick={()=>modalState(false)}>
                x
            </div>
            {
                header && 
                (
                    <div className="header">{header}</div>
                )
            }
            {
                body && 
                (
                    <div className="body">{body}</div>
                )
            }
            {
                footer && 
                (
                    <div className="footer">{footer}</div>
                )
            }
        </div>
    )
}

export default Modal
