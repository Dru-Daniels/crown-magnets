import React from 'react'
import './directory.styles.scss'

import Beatles from '../../images/Beatles.jpg'
import Custom from '../../images/cutomWhite.jpg'
import Cat from '../../images/cat.jpg'
import AllUNeed from '../../images/AllYouNeed.jpg'
import Resist from '../../images/Resist.jpg'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'sets',
          imageUrl: Beatles,
          id: 1,
          linkUrl: 'shop/sets'
        },
        {
          title: 'causes',
          imageUrl: Resist,
          id: 2,
          linkUrl: 'shop/causes'
        },
        {
          title: 'quirky',
          imageUrl: Cat,
          id: 3,
          linkUrl: 'shop/quirky'
        },
        {
          title: 'quotes',
          imageUrl: AllUNeed,
          size: 'large',
          id: 4,
          linkUrl: 'shop/quotes'
        },
        {
          title: 'custom',
          imageUrl: Custom,
          size: 'large',
          id: 5,
          linkUrl: 'shop/custom'
        }
      ]

    }
  }

  render() {
    return (
      <div className='directory-menu' >
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory