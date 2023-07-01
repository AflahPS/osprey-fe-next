import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
}

const MetaHeader = (props: Props) => {
    const {title, description} = props;
  return (
    <Head>
      <title>{title || 'Osprey'}</title>
      <meta
        name='description'
        content={description || 'One stop for all kinds of printer troubles'}
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta
        name='keywords'
        content='printer refill, printer service, printer, cartridge refill, printer ink'
      />
      <link
        rel='icon'
        href='/favicon.ico'
      />
    </Head>
  );
};

export default MetaHeader;
