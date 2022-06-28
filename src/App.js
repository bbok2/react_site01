import logo from './logo.svg';
import './Common.css';
import './App.css';

function FooterMenu(){
  return(
    <div class="f_menu">
          <ul class="f_menulist">
            <li class="f_menuitem">
              <a href="/brand/madeInYounglim" class="f_menuanchor">브랜드</a>
            </li>
            <li class="f_menuitem">
              <a href="/product/kitchen" class="f_menuanchor">제품</a>
            </li>
            <li class="f_menuitem">
              <a href="/interiorSolution/interiorStart" class="f_menuanchor">인테리어 솔루션</a>
            </li>
            <li class="f_menuitem">
                <a href="/magazine" class="f_menuanchor">매거진.Y</a>
            </li>             
            <li class="f_menuitem">
              <a href="/showroom" class="f_menuanchor">쇼룸 안내</a>
            </li>             
          </ul>
          <ul class="f_menulist">             
            <li class="f_menuitem">
              <a href="/recruitAgency" class="f_menuanchor">대리점 개설문의</a>
            </li>                                       
            <li class="f_menuitem">
              <a href="/customer" class="f_menuanchor">고객센터</a>
            </li>             
            <li class="f_menuitem">
              <a href="#" onclick="fn_herfAsApplication()" class="f_menuanchor">A/S 접수</a>
            </li>             
            <li class="f_menuitem">
              <a href="javascript:void(0);" class="f_menuanchor" data-role="modal__open" data-target="#TermsofUse">이용약관</a>
            </li>
            <li class="f_menuitem">
              <a href="javascript:void(0);" class="f_menuanchor" data-role="modal__open" data-target="#Privacypolicy">개인정보 처리방침</a>
            </li>             
            <li class="f_menuitem">
              <a href="http://company.yl.co.kr/ko/" class="f_menuanchor" target="_blank" title="새창 열림">회사소개</a>
            </li>             
          </ul>
          <ul class="f_menulist f_menulist--link">
            <li class="f_menuitem">
              <a href="https://blog.naver.com/younglim1984" class="f_menuanchor" target="_blank" title="새창 열림">Blog</a>
            </li>
            <li class="f_menuitem">
              <a href="https://www.instagram.com/younglim_official/" class="f_menuanchor" target="_blank" title="새창 열림">Instagram</a>
            </li>
            <li class="f_menuitem">               
              <a href="https://www.youtube.com/c/%EC%98%81%EB%A6%Bcyounglim" class="f_menuanchor" target="_blank" title="새창 열림">YouTube</a>              
            </li>
            <li class="f_menuitem">               
              <a href="https://younglimmall.co.kr" class="f_menuanchor" target="_blank" title="새창 열림">영림몰</a>
            </li>             
            <li class="f_menuitem">
              <a href="/catalog" class="f_menuanchor" target="_blank" title="새창 열림">e카탈로그</a>
            </li>             
          </ul>
        </div>
  )
}

function FooterCorp(){
  return (
<div class="f_corporaterow">
        <div class="f_corporate">           
          <div class="f_corporatename">영림임업(주)</div>          
          <div class="f_corporateinfo">인천광역시 남동구 호구포로 9</div>
          <div class="f_corporateinfo">
            <div class="f_corporateinfoitem">대표. 김장원</div>
            <div class="f_corporateinfoitem">
              사업자 등록번호. 137-81-02411
            </div>
          </div>
          <div class="f_corporateinfo">
            <div class="f_corporateinfoitem f_corporateinfoitem--block">
              Tel. 1577-5600
            </div>
            <div class="f_corporateinfoitem f_corporateinfoitem--block">
              Fax. 032-813-5505
            </div>
          </div>
        </div>
        <div class="f_corporate">           
          <div class="f_corporatename">영림화학(주)</div>          
          <div class="f_corporateinfo">
            인천광역시 서구 북항로 31번길 13
          </div>
          <div class="f_corporateinfo">
            <div class="f_corporateinfoitem">대표. 황복현</div>
            <div class="f_corporateinfoitem">
              사업자 등록번호. 137-81-40827
            </div>
          </div>
          <div class="f_corporateinfo">
            <div class="f_corporateinfoitem f_corporateinfoitem--block">
              Tel. 1577-5600
            </div>
            <div class="f_corporateinfoitem f_corporateinfoitem--block">
              Fax. 032-578-4455
            </div>
          </div>
        </div>
        <div class="f_corporate">          
          <div class="f_corporatename">영림산업(주)</div>          
          <div class="f_corporateinfo">
            인천광역시 남동구 앵고개로 584
          </div>
          <div class="f_corporateinfo">
            <div class="f_corporateinfoitem">대표. 황복현</div>
            <div class="f_corporateinfoitem">
              사업자 등록번호. 131-86-10859
            </div>
          </div>
          <div class="f_corporateinfo">            
            <div class="f_corporateinfoitem f_corporateinfoitem--block">
              Tel. 1577-5600
            </div>            
            <div class="f_corporateinfoitem f_corporateinfoitem--block">
              Fax. 032-812-5501
            </div>
          </div>
        </div>
      </div>
  )
}

function App() {
  return (
 <footer class="footer" id="footer">
  <div class="f_body">
    <div class="f_inner">
      <div class="f_row">
        <div class="f_logo">영림 토탈 인테리어</div>
        <FooterMenu />
      </div>
        <FooterCorp />
    </div>
  </div>  
     <div class="f_bottom">
    <div class="f_inner">
      <div class="f_copy">Younglim</div>
      <div class="f_cs">
        고객센터<span class="f_csnumber">1577 - 5600</span>
      </div>
    </div>
  </div>
</footer>
  );
}

export default App;
