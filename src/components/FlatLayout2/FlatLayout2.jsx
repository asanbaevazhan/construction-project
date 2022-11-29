import React from 'react'
import './FlatLayout2.scss'
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import flatOne from './../../assets/img/flat-one.svg'
import flatTwo from './../../assets/img/flat-two.svg'
import flatThree from './../../assets/img/flat-three.svg'
import flatFour from './../../assets/img/flat-four.svg'
import flatFive from './../../assets/img/flat-five.svg'
import flatSix from './../../assets/img/flat-six.svg'
import flatSeven from './../../assets/img/flat-seven.svg'
import flatEight from './../../assets/img/flat-eight.svg'
import flatNine from './../../assets/img/flat-nine.svg'
import flatTen from './../../assets/img/flat-ten.svg'
import flatEleven from './../../assets/img/flat-eleven.svg'
import flatTwelve from './../../assets/img/flat-twelve.svg'
import flatThirteen from './../../assets/img/flat-thirteen.svg'

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '756b60;',
      color: '#fff',
      boxShadow: "0px 0px 5px 0px #000",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(20),
    },
  }));


function FlatLayout2() {
 
  return (
    <div className="flat-links">

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    2
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    78,77  
                </React.Fragment>
            }
        >
        <Link to="/floor-two/flat-one" className='floor-one-flat-one'>
                <img src={flatOne} alt="" />
                <SearchOutlined 
                    style={{ fontSize: '30px', color: '#756b60'}}
                    className='search'
                />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    1
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    47,98  
                </React.Fragment>
            }
        >
            <Link to="/floor-two/flat-two" className='floor-one-flat-two'>
                <img src={flatTwo} alt="" />
                <SearchOutlined 
                    style={{ fontSize: '30px', color: '#756b60'}}
                    className='search'
                />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    1
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    47,98  
                </React.Fragment>
            }
        >
             <Link to="/floor-two/flat-three" className='floor-one-flat-three'>
                <img src={flatThree} alt="" />
                <SearchOutlined 
                    style={{ fontSize: '30px', color: '#756b60'}}
                    className='search'

                />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    2
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    71,60  
                </React.Fragment>
            }
        >   
            <Link to="/floor-two/flat-four" className='floor-one-flat-four'>
                <img src={flatFour} alt="" />
                <SearchOutlined 
                    style={{ fontSize: '30px', color: '#756b60'}}
                    className='search'

                />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    2
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    73,60  
                </React.Fragment>
            }
        >   
            
            <Link to="/floor-two/flat-five" className='floor-one-flat-five'>
              <img src={flatFive} alt="" />
              <SearchOutlined 
                style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

              />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    1
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    44,41 
                </React.Fragment>
            }
        >   
              
            <Link to="/floor-two/flat-six" className='floor-one-flat-six'>
              <img src={flatSix} alt="" />
              <SearchOutlined 
                    style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

                  />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    1
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    44,36 
                </React.Fragment>
            }
        >   
            <Link to="/floor-two/flat-seven" className='floor-one-flat-seven'>
              <img src={flatSeven} alt="" />
              <SearchOutlined 
                    style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

              />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    2
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    69,72 
                </React.Fragment>
            }
        >   
              
            <Link to="/floor-two/flat-eight" className='floor-one-flat-eight'>
              <img src={flatEight} alt="" />
              <SearchOutlined 
                        style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

                  />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    2
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    87,32 
                </React.Fragment>
            }
        >   
              
            <Link to="/floor-two/flat-nine" className='floor-one-flat-nine'>
              <img src={flatNine} alt="" />
              <SearchOutlined 
                style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

              />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    3
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    109,8
                </React.Fragment>
            }
        >   
              
            <Link to="/floor-two/flat-ten" className='floor-one-flat-ten'>
              <img src={flatTen} alt="" />
              <SearchOutlined 
                    style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

              />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    1
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    45,88
                </React.Fragment>
            }
        >   
              
            <Link to="/floor-two/flat-eleven" className='floor-one-flat-eleven'>
              <img src={flatEleven} alt="" />
              <SearchOutlined 
                style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

              />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    2
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    70,52
                </React.Fragment>
            }
        >   
              
            <Link to="/floor-two/flat-twelve" className='floor-one-flat-twelve'>
              <img src={flatTwelve} alt="" />
              <SearchOutlined 
                style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

              />
            </Link>
        </StyledTooltip>

        <StyledTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">КОЛИЧЕСТВО КОМНАТ</Typography>
                    3
                    <Typography color="inherit">ПЛОЩАДЬ, М² </Typography>
                    118,16
                </React.Fragment>
            }
        >   
             
              <Link to="/floor-two/flat-thirteen" className='floor-one-flat-thirteen'>
                <img src={flatThirteen} alt="" /> 
                <SearchOutlined 
                  style={{ fontSize: '30px', color: '#756b60'}}
                className='search'

                />
              </Link>
        </StyledTooltip>
    </div>
  )
}

export default FlatLayout2



  

