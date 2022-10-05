import React from 'react';
import styled from "styled-components";
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import PoolIcon from '@mui/icons-material/Pool';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const DivLeft = styled.div`
  width: 23%;
`

const DivCenter = styled.div`
  width: 54%;
  height: 100vh;
`
const DivTop = styled.div`
`
const DivTitle = styled.div`
`
const Title = styled.p`
  font-size: 27px;
  font-weight: 500
`
const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between
`

const DivDetailLeft = styled.div`
  width: 60%;
  display: flex;
  gap: 10px;
`

const DivStar = styled.div`
  display: flex;
  gap: 5px
`

const Star = styled.div`
display: flex;
justify-content: center;
gap: 5px;
`

const Comment = styled.div`
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    cursor: pointer
  }
`

const DivOwner = styled.div`
`
const DivPlace = styled.div`
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    cursor: pointer
  }
`

const DivDetailRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`

const Share = styled.div`
  text-decoration: underline;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  &:hover {
    cursor: pointer;
    background-color:#FFF8F6;
    border-radius: 4px;
  }
`
const Save = styled.div`
  text-decoration: underline;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  &:hover {
    cursor: pointer;
    background-color: #FFF8F6;
    border-radius: 4px;
    padding:0 10px 0 10px
  }
`

const ContainerImg = styled.div`
  display: flex;
  width: 100%;
  height: 470px;
  margin-top: 2rem;
`

const DivImgLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const DivImg = styled.div`
  width: 95%;
  height: 95%;
  margin: 5px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  &:hover {
    background-color: #d52e2e;
    cursor: pointer;
  }
`

const ContainerImgRight = styled.div`
  width: 50%;
  height: 100%;
`

const DivImgRight = styled.div`
  width: 95%;
  height: 95%;
  margin: 5px;
`
const DivImgSmall = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`

const ImgSmallLeft = styled.img`
  object-fit: cover;
  width: 50%;
  height: 100%;
  &:hover {
    background-color: #262424;
    cursor: pointer;
  }
`
const ImgSmallRight = styled.img`
object-fit: cover;
  width: 50%;
  height: 100%;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  &:hover {
    background-color: #262424;
    cursor: pointer;
  }
`

const Information = styled.div`
    width: 70%;
    height: 100vh;
`
const DivOne = styled.div`
    margin-bottom: 1.5rem;
`
const Div11 = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
`
const Div12 = styled.div`
    
`
const Div2 = styled.div`
margin-bottom: 1.5rem;
`
const Div21 = styled.div`
display: flex;
gap: 10px;
`

const Div22 = styled.div`
font-size: 20px;
font-weight: 500;
margin-bottom: 0.5rem;
`
const Div23 = styled.div`
    
`
const Div3 = styled.div`
    margin-bottom: 1.5rem;
`
const Div31 = styled.img`
  object-fit: cover;

  width: 15%;
    margin:1rem 0;
`
const Div32 = styled.div`
    
`
const Div33 = styled.div`
margin:1rem 0;
font-weight: 500;
text-decoration: underline;
&:hover {
cursor: pointer;
}
`
const Div4 = styled.div`{
margin-bottom: 1.5rem;
}
`
const Div41 = styled.div`{
display: flex;
align-items: center;
}
`
const H41 = styled.h4`{
display: flex;
align-items: center;
text-decoration: underline;
&:hover {
  cursor: pointer;
}
}
`

const Div42 = styled.div`{
}
`
const Div43 = styled.div`{
font-weight: 500;
margin:1rem 0;
}
`
const Div44 = styled.div`{
  font-weight: 500;
  margin: 1rem 0;
  text-decoration: underline;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
}`


const BookRoom = styled.div`{
  width: 30%;
  height: 100vh;
  background-color: #262424;
}`
const DivBottom = styled.div`{
  display: flex;
  width: 100%;
  height: 100vh;
}`

const DivRight = styled.div`{
  width: 23%;
}`
export const BookingPages = () => {
    return (
        <>
            <Wrapper>
                <DivLeft/>
                <DivCenter>
                    <DivTop>
                        <DivTitle>
                            <Title>Come enjoy our cozy waterfront house on the bay.</Title>
                            <Detail>
                                <DivDetailLeft>
                                    <DivStar>
                                        <Star>
                                            <span><StarIcon/></span>
                                            <span>4,97</span>

                                        </Star>
                                        <span>.</span>
                                        <Comment>29 đánh giá</Comment>
                                    </DivStar>
                                    <span>.</span>
                                    <DivOwner>Chủ nhà siêu cấp</DivOwner>
                                    <span>.</span>
                                    <DivPlace>Grand Marais, Michigan, Hoa Kỳ</DivPlace>
                                </DivDetailLeft>
                                <DivDetailRight>
                                    <Share>

                                    </Share>
                                    <Share>
                                        <span><IosShareIcon/></span>
                                        <span>Chia sẻ</span>
                                    </Share>

                                    <Save>
                                        <span><FavoriteBorderIcon/></span>
                                        <span>Lưu</span>
                                    </Save>
                                </DivDetailRight>
                            </Detail>
                        </DivTitle>
                        <ContainerImg>
                            <DivImg>
                                <Img
                                    src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"/>
                            </DivImg>
                            <ContainerImgRight>
                                <DivImgRight>
                                    <DivImgSmall>
                                        <ImgSmallLeft
                                            src='https://duhocvip.com/wp-content/uploads/2017/07/du-hoc-anh-tong-quan-ve-vuong-quoc-anh.jpg'/>
                                        <ImgSmallRight
                                            src='https://vcdn1-dulich.vnecdn.net/2021/07/16/8-1626444967.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=GfgGn4dNuKZexy1BGkAUNA'/>
                                    </DivImgSmall>
                                    <DivImgSmall>
                                        <ImgSmallLeft
                                            src='https://duhocvip.com/wp-content/uploads/2017/07/du-hoc-anh-tong-quan-ve-vuong-quoc-anh.jpg'/>
                                        <ImgSmallRight
                                            src='https://vcdn1-dulich.vnecdn.net/2021/07/16/8-1626444967.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=GfgGn4dNuKZexy1BGkAUNA'/>
                                    </DivImgSmall>
                                </DivImgRight>
                            </ContainerImgRight>
                        </ContainerImg>
                    </DivTop>
                    <DivBottom>
                        <Information>
                            <DivOne>
                                <Div11>Phòng riêng tại khu nghỉ dưỡng. Chủ nhà Shwe Inn Tha</Div11>
                                <Div12>
                                    <span>2 khách</span>
                                    <span>.</span>
                                    <span>1 phòng ngủ </span>
                                    <span>.</span>
                                    <span>1 giường</span>
                                    <span>.</span>
                                    <span>1 phòng tắm riêng</span>
                                </Div12>
                            </DivOne>
                            <hr/>
                            <Div2>
                                <Div21>
                                    <div><PoolIcon/></div>
                                    <Div22>Lặn ngụp</Div22>
                                </Div21>

                                <Div23>Đây là một trong số ít chỗ ở có bể bơi tại khu vực này.</Div23>
                            </Div2>
                            <hr/>
                            <Div3>
                                <Div31 src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"/>
                                <Div32>Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng.</Div32>
                                <Div33>Tìm hiểu thêm</Div33>
                            </Div3>
                            <hr/>
                            <Div4>
                                <Div41>
                                    <span><GTranslateIcon/></span>
                                    <span>Một số thông tin đã được dịch tự động.</span>
                                    <H41>Hiển thị ngôn ngữ gốc</H41>
                                </Div41>
                                <Div42>Shwe Inn Tha Floating Resort cung cấp các phòng có điều hòa không khí theo phong cách mộc mạc với ban công riêng và tầm nhìn ra Hồ Inle. Có Wi-Fi miễn phí. Khu nghỉ dưỡng rất đẹp và thân thiện với vị trí hoàn hảo để tham quan trong khu vực. Dịch vụ rất tốt và nhân viên rất thân thiện.</Div42>
                                <Div43>Chỗ ở ...</Div43>
                                <Div44><span>Hiển thị thêm</span> <span><KeyboardArrowRightIcon/></span></Div44>
                            </Div4>
                            <hr/>



                        </Information>

                        <BookRoom></BookRoom>
                    </DivBottom>
                </DivCenter>
                <DivRight/>
            </Wrapper>
        </>

    )
};

