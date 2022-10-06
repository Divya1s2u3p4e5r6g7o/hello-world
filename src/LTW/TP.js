import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import './TP.css'

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  const content = (
    <div className='title'>
      <b>{`Folders`}</b>
    </div>
  );

  return (
    <Root>
      {content}
      <Divider style={{width:"280%",marginLeft:"100px"}}>Untitled(0)</Divider>
     
    
    <div>
        <div><span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" fill="white" stroke="#E3E3E3"></rect>
          <path d="M14.4964 9.49645L14.4964 10.5036L10.5036 10.5036H9.49643L5.50355 10.5036L5.50355 9.49645H9.49643H10.5036H14.4964Z" fill="#707280"></path>
</svg>&nbsp;&nbsp;
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" fill="white" stroke="#E3E3E3"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.125 7.5C8.81536 7.5 9.375 6.94036 9.375 6.25C9.375 5.55964 8.81536 5 8.125 5C7.43464 5 6.875 5.55964 6.875 6.25C6.875 6.94036 7.43464 7.5 8.125 7.5ZM8.125 11.25C8.81536 11.25 9.375 10.6904 9.375 10C9.375 9.30964 8.81536 8.75 8.125 8.75C7.43464 8.75 6.875 9.30964 6.875 10C6.875 10.6904 7.43464 11.25 8.125 11.25ZM9.375 13.75C9.375 14.4404 8.81536 15 8.125 15C7.43464 15 6.875 14.4404 6.875 13.75C6.875 13.0596 7.43464 12.5 8.125 12.5C8.81536 12.5 9.375 13.0596 9.375 13.75ZM11.875 7.5C12.5654 7.5 13.125 6.94036 13.125 6.25C13.125 5.55964 12.5654 5 11.875 5C11.1846 5 10.625 5.55964 10.625 6.25C10.625 6.94036 11.1846 7.5 11.875 7.5ZM13.125 10C13.125 10.6904 12.5654 11.25 11.875 11.25C11.1846 11.25 10.625 10.6904 10.625 10C10.625 9.30964 11.1846 8.75 11.875 8.75C12.5654 8.75 13.125 9.30964 13.125 10ZM11.875 15C12.5654 15 13.125 14.4404 13.125 13.75C13.125 13.0596 12.5654 12.5 11.875 12.5C11.1846 12.5 10.625 13.0596 10.625 13.75C10.625 14.4404 11.1846 15 11.875 15Z" fill="#707280"></path>
</svg>&nbsp;&nbsp;
</span>

<svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E3E3"></circle>
          <path d="M7 14.7087V17H9.29135L16.0493 10.242L13.758 7.9507L7 14.7087ZM17.8213 8.47007C18.0596 8.23177 18.0596 7.84683 17.8213 7.60853L16.3915 6.17873C16.1532 5.94042 15.7682 5.94042 15.5299 6.17873L14.4117 7.2969L16.7031 9.58825L17.8213 8.47007Z" fill="#11142C"></path>
</svg>&nbsp;&nbsp;
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E3E3"></circle>
          <path d="M16.6673 8.27337L15.7273 7.33337L12.0007 11.06L8.27398 7.33337L7.33398 8.27337L11.0607 12L7.33398 15.7267L8.27398 16.6667L12.0007 12.94L15.7273 16.6667L16.6673 15.7267L12.9407 12L16.6673 8.27337Z" fill="#11142C"></path>
</svg>

</div>
    </div>
    </Root>
  );
}
