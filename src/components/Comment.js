import React from 'react'

export function Comment ({
  title,
  body,
  handleDelete,
  id,
}) {
  return (
    <div className="mv2 tl bg-near-white br3 pa3">
      <div className="flex">
        <div onClick={() => handleDelete(id)} className="flex-auto red mr4 pointer">❌</div>
        <div className="flex-auto">
          <p className="b f5 ma0 mb2 mid-gray">{title}</p>
          <p className="gray f6 ma0 pb1 light-silver">{body}</p>
        </div>
      </div>
    </div>
  )
}
