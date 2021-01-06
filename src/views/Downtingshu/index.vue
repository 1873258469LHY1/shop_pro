<template>
  <div>
    <div>
      <div class="container">
        <div class="content">
          <section class="con1">
            <img
              class="con1_img"
              src="https://h5static.kuwo.cn/www/kw-www/img/1bg.feab50d.png"
            />
            <div class="con1_son flex__x">
              <div class="con_left">
                <img
                  class="con_left_img1"
                  src="https://h5static.kuwo.cn/www/kw-www/img/pic_logo.f640b0c.png"
                />
                <h2>听·见所想</h2>
                <h3>畅听海量有声内容，3亿听友的选择</h3>
                <div class="platform">
                  <a href="##">
                    <img
                      src="https://h5static.kuwo.cn/www/kw-www/img/btn_and.779448e.png"
                    />
                  </a>
                  <a href="##">
                    <img
                      src="https://h5static.kuwo.cn/www/kw-www/img/btn_iphone.fe00e33.png"
                    />
                  </a>
                </div>
              </div>
              <img
                class="con1_son_img"
                src="https://h5static.kuwo.cn/www/kw-www/img/1.3413765.png"
              />
            </div>
          </section>
          <section class="con2">
            <img
              class="con2_img1"
              src="https://h5static.kuwo.cn/www/kw-www/img/2bg.bd9b785.png"
            />
            <div class="con2_son">
              <div class="con2_son_son">
                <div class="con2_Info">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAbFBMVEUAAAD/4R//4B//4B//4SD/4B//4B//4CD/7C7/4B//4CD/4iH/4iD/4B//4B//4SD/4CD/5ST/5Cb/6Cf//zz/4B//4CD/4B//4SD/4R//4iH/3yD/4B//4B//4CD/4B//4iD/4iL/4iT/3x9m1GqzAAAAI3RSTlMAoffKZueWdwnCXyhP76iJcBwXEATgV7ZAOi7Zz7uwgkY0Iq+GK+8AAAIBSURBVGje7ddZrptAEIXh093MM9jG83j2v8c8RVGiW4Ch3LlX4ttASVWCX43VavXfbY+xcS41WYsPyoNbyd9Mjo/oerPjX2wDbcmjvvALBpqe8dVSEEHJK6hKDikUhmz6aMcxYbLwKIfacZIA853iveVUKeZpsyrkW7oZRymiM9+WvftnuTvOYjBd3uwt5woxTZeZkIucMC4JUi7WYFQRUsEeYyKqsFsMM1RywKCGWu4YkltqcRhiqGcDWUtFBWQZFUWeNsczZCk1tRA5agp8Dapm3Eg7FTEF2qk4UlUsp7ukpitEN2qyCSQBBdqpyKmqhmhHTW7Gl6Sdip6qekg6qoogulDTDqKaql6QPEg/qUgsNVUQXamp9JaKJyRPqoohKqkphagif2QqHpC8qKqG6ExNF4giquogKXylYkNVBiJH/shU5JAcSP7EVNwg2lNTufWViiMkJ6qKIQqpyfhKhYMo8zWopaYUnlJh4CkVGeAnFS1kG+XN+UiFzTHkTi0NBh31Fjdsa3XffB9ORVhgVMPF0iDBuJyLhCbrIFBLhd03J0xnOIu7H4R0K6biHBUbvK3jW8IqaDFPyqnsNT5hvoCTuPqQYJEk5Jhd1G+wXMEhZRW8oCSiwKbxE5oMv3CpHwm0Nfafo5i+w0fk5s9RbkGOD2ozkzpn4uMWq9XqO/gFjYH/k+QmxiQAAAAASUVORK5CYII="
                  />
                  <p>独家大IP 精彩放送</p>
                </div>
                <p class="con2_son_son_p">独家放送，重磅出击</p>
              </div>
              <img
                class="con2_son_img22"
                src="https://h5static.kuwo.cn/www/kw-www/img/2.3edfe7b.png"
              />
            </div>
          </section>
          <section class="con3">
            <div class="con2_son">
              <div class="con2_son_son">
                <div class="con2_Info">
                  <img
                    class="con3___imgs"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAWlBMVEUAAAD/4yX/4B//4B//4iH/4yL//zT/4B//4B//4B//4B//4CD/6yL/4B//3yD/4B//4B//4B//4CD/4B//4B//4R//4R//4iH/4yD/4B//4B//4SH/4B//3x80JVD+AAAAHXRSTlMAGfbDOyQE4tediH8OWfrMv7WolXJoUUQu7utcrLniI0IAAAGsSURBVGje7dpZbsIwFIXh2E7IhMOc+ex/m7XEQx+obgIcbmnxt4HjgIh+ySRRFEX/wcYYs0leZZul7aU+za4YEFhXG+bR+246V+Vhlze40ZRbxtGP+2LEgjxN7hWO7q9Ht7iDXb2U+Uo6+vJStmrGOzzLrXkaBwK/uJNaMDjijiyTd7Y5SLw8VIKlEndMA5ajOFSDZi8OOdAU4tvSgmYUvyIQbbSGjNZQL31HIOoSwQAeLw0V4Dkr/Y7kd9AMnlIaOoHnoPSuw04auoAnl4Za8FhpKAWRFKwZiDIpGUAk5moDnlYaysFzkYZ24KmloQN4TgtdpxNcFZSC64xAI7gm8AzSUIdAI7h6IIjB9UhwjeCZ3iK49gg0gusIIAbX5wRXE4PrNcFlgSAG16cE16wVXO4tgssjiMH168FltILLKAWX3SgFl0uUgqtOdIKrMeJQBWLXqbwaciEZlqqBe9HneDsKn50TCoj4SM4na2QWjxqL/bHy309Dveiz+e5QVuep6++/k08Xo2sIRz/VlzbNnrwZL3+6br85OoOpnb0e3c03R/9T/4SIoihS9AWsOXzdpwVdwQAAAABJRU5ErkJggg=="
                  />
                  <p>全专业分类，任你点播</p>
                </div>
                <p class="con2_son_son_p">专业分类，千万无损音乐任你听</p>
              </div>
              <img
                class="con2_son_img22"
                src="https://h5static.kuwo.cn/www/kw-www/img/3.53da479.png"
              />
            </div>
          </section>
          <section class="con4">
            <img
              class="con2_img1"
              src="https://h5static.kuwo.cn/www/kw-www/img/4bg.599d1a3.png"
            />
            <div class="con2_son">
              <div class="con2_son_son">
                <div class="con2_Info">
                  <img
                    class="con4___imgs"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAYFBMVEUAAAD/4B//4R//6Sb/5CH/4B//4B//4B//4B//4B//4iH/4SD/4iH/6TP/4B//4B//4B//4B//4CD/4SD/4B//4B//4SD/4CH/4iD/4yH/4yL/4yL/4CD/4B//4CD/3x8yTHygAAAAH3RSTlMA/G8RG/Dn3dbNPWZNCfbGvbOolYuAd1pFNSwkY1GfrfcpQwAAAhBJREFUaN7t2llu6kAUhOHT3Z4HzGwMhtr/Lq908xAlZihS3S9RviVgifqPZfvza2SdP/ouWGLtgA/1aAk1FT6VV0uldfhifbYkPL5zu2DxTQ5LubfY+hJ3VSeL64BHNheLKFvhIbcPFs0WzxSzRdLghbqxKGq8tM1MN4OwOvQmCgUoxWiaPVjDZIKLA+8mPKoN3pEf7YdOeFPZ2Y9UYOgD4sHQByTkYOgDsgNDH5CzA0MfkDUY+oBcISpmdr8Z+oAcwdAHJMvB0AfkhljKyZ6YEI/z9tiAmFp7ZERUrrH7+gJxVWSa6louTXUDmaa6jEtTXcelqc7bQosUjlya6jyXprqOS1NdoNJUV3NpqhupNNWVXJrqrlSa6tZUmurcmUpT3Y5KU10ehDSV/n1KJFFxQaI7UTOk2yzmAUm4xZ3UIYk9dRjrikCdKbpZOPWFGUr3jBpbyhDflrpUdKvMPqXsuQP1hklX9HZf47CgB0n6H2+wx7xDPM+P8RKx3Oyp/rBCFPnrVybbRGfKUlPHSFPKXOhXCifsnZimtMtGTFPeqRLTlOdzLU15Yee0NOWd12Ka8q6llqa8/phracrLbu+lqWAawNqbZizoNGXoAzIbQx+Q2ij6gDQWSVsQaUoQB2SVGUMfkIMx9AEpeyPoA+ImY+gD4o2gD4hrjaAPSNVYQmOND0NriYX/X8Jl9ue3+Acz66e1OtqjUwAAAABJRU5ErkJggg=="
                  />
                  <p>大咖云集 倾情加盟</p>
                </div>
                <p class="con2_son_son_p">热门大咖，鼎力呈现</p>
              </div>
              <img
                class="con2_son_img22"
                src="https://h5static.kuwo.cn/www/kw-www/img/4.2fd5d26.png"
              />
            </div>
          </section>
          <section class="con5">
            <img
              class="con5___imgs"
              src="https://h5static.kuwo.cn/www/kw-www/img/5bg.b1dc5ee.png"
            />
            <div class="con2_son">
              <div class="con2_son_son">
                <div class="con2_Info">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoBAMAAADvMqiSAAAAJFBMVEX/3h8AAAD/3yD/3yD/3yD/3yD/3iH/3yD/4B//4SL/3yD/2ySJ3aEEAAAADHRSTlPMADi9saaUgGJMKBzA9QVSAAABcklEQVRYw83YLU4EQRDF8X9YDJJN+AgY+gZ7BCwSjUKhMXgsCsEFcFgE92PoEMyrzKOe2vIvv83sTHdVcRzUHoQ+nh5euqE3gJte6ItZd53QdseszWiErvitg/+HtvxVSVFDrFLU0DpFDa1TlJChKCFDUUGOooIcRQFZigKyFAp5CoU8hUKeQiFPoZCnUMhTKOQpFPIUCnkKhTyFQp5CIU+hkKdQyFMo5CkU8hQKeQqFPIVCnkIhT6GQp1DIUyjkKRTyFAp5CoEsNUOXOxq1+ZyhE1p1O0OvtOpohq5p1eFP6IJmvS+hc5r1vITOaNbjEjqlWfdRKPp50YOIHnny50avUfTCRp9G8hFGn3t+sPSokRyW4bGcXwAdaiSXWnZ95hd13hLkzYenRtJQZa1b3iTm7Wje+HpqJM18NjbkA0o+CuVDl6dGNEjmI2s+HOdjeD7w56uFfImh1MgXM/kKKF825WutfIGWr+p0KbjHO8u1+gamYMGDQulvLgAAAABJRU5ErkJggg=="
                  />
                  <p>热门内容 每日更新</p>
                </div>
                <p class="con2_son_son_p">随心所欲，听你想听</p>
              </div>
              <img
                class="con2_son_img22"
                src="https://h5static.kuwo.cn/www/kw-www/img/5.74dc6b2.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Downtingshu",
};
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.container {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
}
.flex__x {
  display: flex;
}
.content {
  min-width: 1140px;
}
/* con1111 */
.con1 {
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: 650px;
  align-items: center;
}
.con1_img {
  width: 122%;
  margin-left: -162px;
}
.con1_son {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  align-items: center;
}
.con_left {
  margin-left: 114px;
  padding-bottom: 20px;
}
.con_left_img1 {
  width: 174px;
  margin-left: 18px;
}
.con_left h2 {
  font-size: 64px;
  margin-top: 35px;
  font-weight: 700;
  margin-left: 16px;
}
.con_left h3 {
  font-size: 20px;
  margin: 24px 0 50px 18px;
  font-weight: 300;
}
.platform {
  display: flex;
}
.platform img {
  width: 220px;
}
.con1_son .con1_son_img {
  width: 56%;
}
/* .con2 */
.con2 {
  position: relative;
  display: flex;
  min-height: 400px;
  align-items: center;
}
.con2_img1 {
  width: 127%;
  margin-left: -227px;
}
.con2_son {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.con2_son_son {
  margin-top: 133px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.con2_Info {
  position: relative;
}
.con2_Info img {
  position: absolute;
  width: 37px;
  height: 37px;
  left: -10px;
  top: 13px;
}
.con2_Info p {
  font-size: 48px;
  font-weight: 500;
  line-height: 36px;
  position: relative;
  z-index: 99;
}
.con2_son_son_p {
  margin-top: 30px;
  text-align: center;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 40px;
}
.con2_son_img22 {
  width: 57%;
  margin-top: 80px;
}
/* con333 */

.con3 {
  position: relative;
  min-height: 400px;
}
.con3___imgs {
  position: absolute;
  width: 37px;
  height: 37px;
  left: 65%;
  top: -13px;
}
/* con44 */
.con4 {
  position: relative;
  min-height: 400px;
}
.con4___imgs {
  position: absolute;
  width: 37px;
  height: 37px;
  left: 65%;
  top: -13px;
}
/* con55 */
.con5 {
  position: relative;
  min-height: 400px;
  margin-bottom: 130px;
}
.con5___imgs {
  position: absolute;
  width: 37px;
  height: 37px;
  left: 16%;
  top: 13px;
}
</style>