import React from 'react';

import Header from '../../layout/Header';
import Walkin from '../../layout/dropdown/Walkin';

const WalkinPickDrop = () => {
  return (
    <div>
      <Header text={'WALK-IN'} sub={'픽-드랍 서비스'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>WALK-IN</div>
            <Walkin current={'pickdrop'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>픽-드랍 서비스</span>
            </div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis similique consequatur nostrum soluta amet quas alias
            quod saepe animi dolor odit magni quia consequuntur, a aspernatur
            cum quisquam vel, tenetur tempore necessitatibus quidem accusamus
            at. Itaque aspernatur quod ratione non consequuntur numquam
            doloribus? Accusantium assumenda recusandae possimus repellendus,
            autem dicta!
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkinPickDrop;
