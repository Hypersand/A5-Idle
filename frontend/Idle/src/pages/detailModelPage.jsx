import { useContext, useEffect, useState } from "react";
import DetailModelBox from "boxs/DetailModelBox";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import BlueButton from "buttons/BlueButton";
import {
  BODY_TYPES,
  DEFAULT_BODY_TYPE,
  DEFAULT_DRIVING_METHOD,
  DEFAULT_ENGINE,
  DRVING_METHODS,
  ENGINES,
  TRANSLATE,
} from "utils/constants";
import WhiteButton from "buttons/WhiteButton";
import CategoryTabs from "tabs/CategoryTabs";
import MainContents from "content/MainContents";
import { carContext } from "utils/context";
import { CHANGE_BODY_TYPES, CHANGE_DRIVING_METHODS, CHANGE_ENGINES } from "utils/actionType";

const dummyData = {
  engines: [
    {
      idx: 1357,
      name: "가솔린 3.8",
      price: 0,
      description:
        "우수한 가속 성능으로 안정적이고 엔진의 진동이 적어 조용한 드라이빙이 가능합니다.",
      purchase_rate: "구매자 22.2%가 선택",
      img_url:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMTExcTFRMYGBcZGhgXGhoYFxkaGxsbGhoZGBoaGxsgISsjGiAoHxcZJDUkKCwuMjIyGSM5PDcxOywxMi4BCwsLDg4OFxAQFy4bFxsxLjsuMTsuLjE7Li48MS47OzcuOzwuMTEuLjs0OTs7Oy4yLjE8Njs7NjwwLjsuLi4xLv/AABEIAPQAzgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABCEAACAgEDAgUBBQUGBAQHAAABAgMRAAQSIQUxBhMiQVFhMkJxgZEHFCOhsTNSYnLB0UOSovAIFXOyFyREgrPh8f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQADAQEAAAAAAAAAAAAAAAABAhExEv/aAAwDAQACEQMRAD8A7NjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGRPXPEOk0m0aidIi1lQx9RA7kKOa+uBLYyC0vi7p0n2Ndpz9DMin9CQchvEX7RtHp7WInUP7eWR5Y/GTsR/l3HAs3VesafTAGeeOO+29wpP4A8nImXx30xf8A6pT/AJVkb/2qc4x17rI1B3nTr5rctIXJZuefji7odh7ZGx6oKaaMr/39f98o7n/8QunfdldvwhlH9VGa+o/aJpR9iOVz/lVR+ZJv+RzlGndWFrz/AL/X4zYjTGC+aj9oMzf2cEaf52Z/5DbmXQ+Opx/awxt9U3J/UtlL06DJGBO3+39PnLiL5F4zhIFwy37gBDX5lheb2i8T6WQ1vKH4kUp/1H0/zymaXSjaGBDX2o8GjzRAN/kDVc1klD5ZW2UbKsuGRox+LNtP4jbwR7c5FXlWBFg2PpnvOdLrYoGuKYqe58sMw+LZKIcWCPTZvgC8sPTfEYZQXAZT2kjO5SPmrP8AIn8MYLJjMOm1CSDcjBh9P9fjM2QMYxgMYxgMYxgMYxgMYxgM4r+150bqJjdbHkx/Qiy/Y+39M6R426jqIYSumjaSVgT6AGZEA9The7H2AFmyODn566prnk1BaQOGZtpMm/cfZCd3I+z2+uB713TmT1IfMT9GH0K/6jjM/QumyajeYyAsal3LGgAo3Hjm+B7D4+c0NX1DZwjktuoiht20Pkbt17gew4982tV1q1iUbwqoC1NX8UipDt+yRYFVVA/N3R4ik3ScewC/oOf53mTqVmgDX1zJptfu+H/Dhv8Al9/y4z5LFG/Kmj8Hg/8Af4YG106SJRQcEnvfHb4ByThcdzZ/DvlYk0hH/wC8RPKn2SR+HI/TthFz0+ovhBuP/psKBHZgxU/UEFaPfjNtNUVu5QL7iIAyHbfJa9u5aPIthTcmmyoafrbj0yIHH4lT+PHB/TJPS9R07/8AEKH4kX8KtlsEChR4b0rzwbCwHqRoBQLP3iPMdiONwJFOR2qgw7cEnbil1TOQzMWPNNe7252k8EVyV4I/Cg2gu0i/3iL6+ux7USKAcAD3pqFbjbFvEnUYFJCB5347Xt47bj9/3Ntv5N+worfid2NIpYgn7PYGqIBPCcUCr1XHf7GbEWrh0LvJLOA0i+qGO2t7G2Tb3VqBX4N8ngVpJptfqQFLCCLsFQUa/Ecj8qGfTp+naHmQ+bKOa4dr78j7Kn/McqLV4a6g+ohSdFaNjwRdGx3o/eGbOs8RayMkFHb4Zdm39ALH55UW6x1HUioI108Xs71dfQkdq/uqfxzFp+hhG82TUyyy99xb0/8AVZP6/lgXLwx46kkm8nUwsqsaWUKQqn2D+1H+8O3uKsi/g5xHW9WROHpv8vB/rz+ozR6V48m0UysjmSAn1wsfb3KE/YYfofe+4kwrvuM0+la6PURRzRnckih1P0YWLHsfkexzcyBjGMBjGMBnl7o139s9YwITw9IXfUOzhm83YQL2x7I4wY1J7+os10L3/TOL+JCuv67JusxrIV78bNOh3D6KWjfmx9u86shOlh1GsTkCXVSTp/eVHcbwPZ1RF7faUUbO0jjXS9SNIdQZw41DRqsbcMB5qh2vaTTNQPvQau55zfcnOtVz1G8ePH2s82RYlCiOLgKigIGP2tnAO3sL+9V/FVsBPsksG/ygg8ntyD/Xtlk6MYUkb94VRSgnzFIJDgsHF+x9I+K5vnI+PSTahVdmX08J6lalBNABrIA547fTFKxWsRCWt6nUSK+b/DNhdS3v6vx7/r3/AFz5qunvFZJBo0RwKv3r8cx5tEhBr69/ybkfr/8AzN+LVRN9tSv1HI/3/rkBntWI7Gv+/jAtUXT0kFowYfr+vxmVOhfRfzyqxaoqb5B+VNHJvp/iSVeDUg+Dw36/7g5RNQdC+VT/AJSf6nNg6iHTcEW/91aB/P2X2+vPbMvS/EGnkoE7G+H4/Ru39Dm8NLEsrThRvYAWeewqx8Eihf0H1siOCa3VcM3kRH25DEfX7x/Oh9MkuldC02nohd7j770a/Adl/S/rnqTVHIfqnUwBy2BN9U6oijvZ/llR6t1otfPH0yK1/VbvnISfUk5NG5q9ZfvkbOSc+7vnM+h6fJNRsJHuVWkewihmC7mIBO0FhZo1kV2v/wAPPUGk0EkLG/KlYL9FcB6/5i5/POl5UP2deC4+mI5SZ5GlCb7I2WoPKAD/ABHkk8VlvwGMYwGMYwGMYwOQfta8STQSS6GKRVSRfMkO3c2102vEARSrSM5Pc+aACK55lGHiMobaZEJAtdyq3p3MprarjYAd1fjYIM/45nc9SnnlUCv4wUkN6E2xwhgO1sIyy/Fn4J09PFvhZS0aswa3lcG2BWQkUCymuBf2jIT7CqIPWat2I3n2Whd0oYKF+tDNcT1/0/yYj/XPGv7974/1HGa8h7/n/wC7IJqBGJNDcpFMCQLv8T3zVYp9xj7fbFHmx3HHtnwxyIEd1IRxaMRwwHBo+9E1mkpP9P8A3YG7u+eP+/Y++exmh5pHbtzx7d/jMseo+eP5j9O4wNrPjLjzOLIr6+2e15GUfFlYfX8f98leieJHgNG2j90J5H1X4/Dsf5iIJF1fOa+tTi/jAuHUfEYayvY5XtVr2fIzSknj8820UDA8FT755HfMk8me9Hond1BVjuYKqL9tyeygdxfz3r2OQfYtOPSzCyw3C+yj7pb53EHj4o+4qy6DqaMraVVLCRRDvUKSpctysYouBbsdp+p5yA6lGV3NIwVgxQRqOfR6WA9ggICgn3Q0DRy0fs96DvJneXyglxxtt3EN/wAR9oILe6X/AIrHIyjuPhPSrDo4IlfeI40j31t3bRtJ2nleQeDyO2S2QvhLWibTgghthaMsCSGKcbuQDz7/AFvv3yayBjGMBjGMBmvrELI6qSrFWAI7gkEAj8M2MYH5RbQzOxhRCXI8wrYshAzPdnnmzXP55g6ajvMqBWZiAtAEm9i3wOb9PsL4y4+IelajRdSM06MkDTypHISNpjkWQqODYAVxd9qPxlb2BNQ0kcqo8cjNEjD0sq0yANdUVIA9m+ebyiYj0MqmnhlHzuilH9UGeZ4NP2cRhu1OFB+ffLd4F8dtOPKnVA/mMKjZk9DAlWXcWDAP6KHsy/HNsfqUbAArKvyAsT/rYF4Rw3rMzJLGqOSgBCruG0C/bcCq/pmMwsQT5YYf4Uik/wDxlTnRvEnTtLqJg8bxgxn+PuiplBX07lSyboDuO+QKaXT+vdpg1HgpEWAW6v0gvR+Svv3xiq1r+nSaWUqYxviIO5VZlDD1fa3FeCPcexzSlDTFppZFsmjwN7EAdlHAFV6jl66hoNLI7PM3rt7bzSnpEjn8PnvlUfpSPKYoyoS3IkLgjYvO5ebahRocm8CGYlK799wB+Oav8e/GfUnIb1D8aIB/2ye6x0jT1UE6vIpIYMQobgcrZr3+cgtfoZYiBIhW+3auO/bjINmTXeYNjRpXNEWCP+r29r+fftmtI1x9+RV/rmfpmj8yQWwSMH1OVcqAPnapNngdqsjtmx1QxBAN4dtthgO9kkFueCAyiufsewrcEVpGph+YzfKHufQp7Fu5/wAq9z+PA+ua+miGwyFAw3BathzRb2Pagc2NaSSpKKaF9qDAoGHvZCiu598DP0rqKaeVJBFHIRzUyFxz2YiwvaiByOeSc3NR1+VpSyMxAMjbo/RsMrO8nlgD08yMu42SooUCRkVOiyGMqygsNrgttAZSRutuArLtPxe4cAVlj8A9CGqZ1HYUT7WAQGH1IEln44wMGh8Mt/D1Mk0ew03O4EBb9grFQu0c7SoFfRT1LwZpoEkRY/QyRAqkkkbK6DvJE60JUYtuLLa2aNEUK/4z0rwalYfJheNVT+0jRztochW4YCuw5snIj9oGhUR79MqqscdyeSpjSnKhrUGueL7dqyjsnhPX6eVXWLap3FygoeliVVwP7rbDz7kHJ7Py54E6y8Gqjn81w6vGLO5g8bNTxNV/aBBW+AV9uCP1AjAgEGweQR2yD3jGMBjGMBjGMDm3/iCCnp8dqSfOBUgcKRHLe78rr6gZx86FY47YyByFtXXaUZSRQvn6du38u1/tp6p5WkSKv7aQKTQJVUBkLLfZrVQG7i7FGjnLul9LTUrJIZtqLXmP5bysPSXMhBIJLFiSbrn2wIzwVqANSIDzHMDG30b7SEX7hgK/zH5zo+gndWOnl/tFFq3s6dg457+x+DlQ6cjRKsml0kj7X8zfK0ZaUbCtFUPoFM1KN1Hm7y76vSieKKVTtYhZIZPgsoYA/wCEg0R/tlhET1To0hmE+mAtv7VHPDmqRrN8r+A+mSuq6DAw5iUH5Qbefc8f65KwuYoEaSMb2eIMA1V5jRxtzyPSzMO33Prj/wAz037wsTOVBUsCQrKSpAZCVb7QtT27HKIXTeGUCsokYhixIkVHHqJJG2hxzkP1vw/HCu+RIjELU+UkiSeqq4Dbe6j3HfL3PNAs3lrLHvoyBdwBrmyAasCm7dqN1lO/aVpnvSzqQ0aSENGaKtvBO4KeH9IYfn9cgrfUunPoNsvlqkcleWC3mqh9W12axVbmIIv7VfIzY8Y+EJ5VE0Z3OQGaIkWxqiU+tfdvm+PjPXjro7mKCdWapZGQxEV5bkufQi+1rJdfA7kk5p9F8QmOJNNKzkrSr5ce9wO6hFLLu4IIsiuO4oAqp6fzAjoCLBtlPPAYWAObtlUn/IubbdK3essxIjE0gVL273ARLutzBg3I7MO54yw6hYPOaaYvJIfURPCsbn7tsoLK44rerX8he+VuDVeU70/oZwxHJ7F9t9z94+/ucg+w6KR9NMQhBjlhbZXq2MJULAdyA5jUke8i5IR9K2RXPHIroFVwK4iLbgWqytkgf5Ub6Zs9N6iyyoyG91oa5BVwUax7iiT9KB9sm9fPWslJAISJJDbMo/h+XYtWUikkkPBB4yip+Ilj1OoEkbxRq+xAosKgVAooIpNUosAXbduct0aLpoYf3eIl40eYzckrCVPmM4U7VJJ7GztIHPDZWOodeMruBJLGoIagzkDbSkKC90T90mr9x7Wvp/iCNIpYXkj/AHbVKUHqEupFRCLzJI0a0YqqADgWD84Ev1vx3pJ9vn6IyqiK/mltg9Qv7FX+V/PbMXVUTyWiETCJ1MfpZFYlqLMzFWIJAFAcAfPfOdtpG1A08SAmRmWE1yd24qKHHFP/ACy0+NvE8un1EcJ0bIiUxWcFXkF0SrKeFIFAizd/FYHP9dpdkjqLKqzLf4E9z2JrP0D+xLreo1ejczWwjfy0ciiyhVPqPuRff65adT0zTarTrFJCrwlVKoy8KK9Nf3SAasZvaPTRxIscaKiKKVUAVQPgAcDIM+MYwGMYwGMYwOcfts0aSDRGRykfntGzqpcjehPCjufQco3SZY9PKWD7o/RHOrlVUo1hNoIA3JdhSCSrOLJrOp+OJ0d4tOyhh6pG4s8IygD4sM35XlC691AaSCPTaBbll86SRwvmukatQRAwbbYXk/4fkgiiqN1hFltSdnPcEcHuBYHGT3SfET6fy0eQGB3LHdEd0Ub+v0Mr7XjBcckcD2rtU9eVk2/xPM3IHaxtZW+8oO0BiPpYPycxdK3xhlrzUo74gSrlSPtp8jj1AXVGwOGAdF0PXtPOXiKDVKbeU7naMkt5noiYCj6Q1biASQABxkH4h8Wad5gqwxPEl7CiiNhYHKMBa3tX7QPYcXle8NzRxtLtndYnKqGX0u17tqk16PtEsQCPSe4OPGfSlhlkCbjsO0llCmwAx4FVwb55qj74F500um1cSy+bK0kW+RNoCyIKt93NSmlsANfp7ncQIZVdpt8UPk6PTMzIsxaPdbbiPssdxY2RXAVV9hkF4A6oY5SKLGvSvNk+1CiTznU9JpkLifXyIjgbkidgK+9uN/2jfQWLB7kcBGjST6vZNNp3MQYNHCjRbgQCBIfMZPTRNLVn3AHB534s6c8OukR/MO7bIpkC+YyGtwpfSSKZaXj0cAChl71f7QzFPTQKYu5AcmVU/vla2/WgfzOZP2rCCeDTTEXAJDumjpmjRlAUpyCwLVdEgbfmsDmfUQUK3QVgktRhwhs1vTeAfUlg+xI+lDW6lGI0Ti9248/IWh+hcnNoyQDZI7vP97YxKoSHohnJLNYB5Cr/AKZO9S1MflsfIWRZZEIVrOxWWRuKrkAgWK+lXgQGheaGIakRhIzUasQSHdeWC8FSa+1fFX71kjB1szJqJ5KLiMrtVFVKYLEN1faJMgIHsEf5z7r9FpTozLRSRX8lU3tQk4ZvtXSbRfzZrjvkBFqdoEaUVB3sSu7c4BAO091WzQN/aYkc0IMuq0RihRn3B5fUFPtHwVcjvbEcfIBPvln0/XI5ejSaeWRPO0s0ckG6t0iOSjKL5baHc/QbfjIqLXad9Ss+s/8AmU/4iRs6s/8ADIB3naRTBBV3V48T6Ly10mnSICSRP3h1Qktunc+XGb5G2NI6B59ZPvZD3+zySVuoRSKVUJJ5zs17ERQWlYiwABHu/QZOyRSdf6ru5ETNS/KaaI+pvoWLf80vwMr+q0X7vFJH5m195jlKGwVUKWjsd+Sdw55j987l+yvw1+5aYO61NKFZx/cUD+HEPwBJP+Jm9qwLeigAAcAcDPeMYDGMYDGM+YH3GfLxeBVPEHhiSWbz45gCQQUcGua5DDlSKPtXPIOct8Q6CTp/VFWSR4Y5PWssVtUb2soFgA7SSStH01wbF98vK/438NQ9Sg8mS1ZTujkX7Ub/AD/iU9ivv9CAQHIZXh07qdPIhkBbTvL5e+GVGG0vv5XkU3BJFcGtxNZ69opEfaAQ8bKVC7lrcFKso7rdow7d/bN/qX7zpJJdA7K6pJbbHVUZ9qkN66IO3ZdccD4za6FqDBIHdY5HcqCqSxkpGpBZQxcW7j7y3tAFEE2lDq3QyCqSL5ckgjHmKKV5HHpEid0eyRuHBBs9y2SfUujdSn41JLbF7OiI+/aqlmZVG/hAu9yQB+JImNDKJdXq9ZLp5mjkMSlFWOUIY1oxkkjafskc9mIK9jm54h8fTSLt06xKD38wgn8qNfywMX7OT0rQxhZNRG8wvc5WlB7UCRZA7C/kkAWctUviXQTBoDOu2UMl2QPUNtEnivg5x6aTUtJ5lRBvosYHzzS8n65cPD/iswrt1BjrsKVefp3H9MDW674SELGd0H8JXJcbArK3G5q9TnkgA2fUByKyuy6ueSCGAQo0cahUiZhvf3MhS7Yk2eFYD2PfJHr3VPM1HkRSn92mFCOm2RyAh1C7h6bKgbVNc8fGa3hLadPqYH1CRTbkFSqKZSzCQhiDzRXij9gijusBFanpEGoiLwAxyoAWiLbgQb4H90969r4IF3kx4YjV0QtIECxRsRwWelX0qD3PORGsfZJFKrW5uOTiix2BzfvwSB82hJJJOZddqxGsUl0N1k8mlClT2+tD88Db8Z6+IN+7cIZT/FReaNeh5T2Mm6j8gd/bKjpOnhiyFgHBFVuPP3h2qxY7kV9ect8mrk038SNYjDI3qbYPMjL8b93Yrfubq/wyP688qEiMlYn2I7ELcjqC4QE8lBd8cX3N7aCAHSptwVUkbdx6Usc8HkE5aepaRtE41c8pbVzB3jjNM8XqdPMdj6SPTS0KPJobQM1PCw18+oGnh2tvokuqgbOb3OBYXhgdvPpPxn3xJBLP1DYZFkkRakbkRoY95KWLoKu0dz25o2oCX/Z34c/fdVFHILiiXzpQed1sQiH530L+VVs/QGUT9i+jUaR9QBRmeh87IVEIH/Okjf8A35fMgYxjAYxjA+Z5LZ9OYnOB9L55MmYJHzXkmwNxpcxSajNGTUZqTanA5J4x0EkvUdWI6DiQSWzUApRW+OftD9Miur6RlatynywxWgBe7a/DVZHcgG63GqyzftALxaoToaEsew8A8rQN39PLr8DlaklaQEuRu20frQofyrKLbqNIx037lFIZY2bzZJFHliQuiBQ3JsAKBt7Hg2duVrqvgGZRuVbPwn+inlj+mX3QoxQJHQLgsT87iwHPt9lR+BOQ/wD5ppkiSeLUsWkkkRVaOOqRtpkcxhZEQkirL0CCQaIwOWanpsibvSSF7kDtXuR3A+vbkc8i7t0fpg8iVYtIsnlaWGdnIRmdpkEhst6gijeNsfPoPN5P+I+njUQtqIwUnh4faaY1wSCOL5sNdEMDyvenaDxGqjytQHXYrIs2kbynMbWxRkBVZIyW3bbXk+9nAw66AxFCgZEcsVRr3RSRFSygnkqA6OpPzXNWd6HVx6iZUeKnkjZ45E28gKd6OCDRBSRPMFH0i+CWyS8RLptKUTnU+XvIXzGIZ5SrSPLIADZ2KuxeeDbWScqnTX9a7fT5UiyJuN7UZlWRT/eA9Bo0K3k98DZ6nJsXasRUp5kaqFvYykq5Y8iyePoN30yP1U5Hkh17RtwwBAJkciwR8V+udHGmhYBSgG0AKQKZQvYAjsB8dvplK6h0CVpVDsSGlaMSPYG30hWJ9hbKOOLNDnjAldBropIvLcAMwYMoH273M7rGq2i0CSa2iibzN4b6S+pc6YxByhS3ax/CDBlYP2UmgpK+okAe9ZKdP6F5LxxrNAHZkSXzW7b1VwrRqAZCbXahsMSt3eSss8Qlkjjj3Sp5kZERbYI1ZwCzkBfNbdKS3FK4AsEYEZ4Y8SwaPqzJJYiKPCrKnAaSRHjsL91URYxQNAD65GeLOnnRz6lndPM1Es0iKu6xEZXsvdAXtIHfs34jLoepxQdUilOnSZ9qmRw3oRSOZI749IP224oexPGXwvp26v1czvbR+Y0p3ADbDG38KOhwLOxSPe3PPOB1f9nen8vpukWqJhjc/i67zf5scsOfAM+5AxjGAxjGB5OYpBmY5jkGBoz5oTnJOZM0tRFgRU8maU02b2pgORuqhOBC+I9MNREUJpgdyH4Yf6EEg/Q5Qk1D6eQNtAdGDBWXcLU3yPvDj88v2vsZW+qhG+0Pz/lgWLw915NQBIilZIh/EiWySjgeZ5YHJpk3qACQNygE1cf1vpR2RCPTjUw2rRhdTHEgTdI5ABXjd5gBKsdwRSRYDGM8DaPbr9tkBo32lfbtyfimAPPHAy76p4la97R7jZMZjBcnn+ykVkZyW5ZArN75Rl0yDd5nlhBJsTYG3DiOpKNCxQq6F+Wfasofgfo0UvVY/MUMm2VgGAKtIpcIGHY1x+arluXqcU/mRQSmWQA7jI8QZFumCxIFA7AEkX7E9q116WIg0ikebC8bDguCQVJY/ZLEK3HaiSTu74Ex1SKDWyfuj6V2tJGEwCfwmjbY0YYHcrqSB6uGPsw5yhdV8Kx6SN5Jm3SKHIRO5VW2PuHNBozIeeQEy+nxew1Ekf7lcisoEisQHJRTurZywBraCWqh75QfFOl6jK0jFIzv3kqsj7j5gpvSNvwaDWABXa7DQ6X1jylMU8nqDVHLt3K6FSVLVzbemjzw3PbmbTTREieRiN0RjRTI0X9oW37bPqam+CAYwSAPs0+GEyxeW6lXjqNgbvby0Z57/eX8FXPGkUtMhZyxklRdxY7gTIL5PP3mN/P44Fm6h1wQTOEjk81VZBIyNGYV7boyyK6EiiQaVbpB2Oa/hWJhqWihcIH4YkF9pPJVOfWaIO4n35HNZ0TofhuPSsAys8jfxHZ/sRi25BPd2NNXPCEmhZyqdGVZeqySxIwiGwxLEnpEZjRkpVHvuJ49ycDYfwXLPIY42YRhEXzHX07Qq3GaIL7mW2Irn2NUbx+zTwq3T4X8xlaWRhuKdgiWEWyAT3ZjwKL17Wdvw2ZXkYvG6IgKgMpQbrHZeN3ud3I575ZcSGMYyBjGMBjGMBnkjPWMDCyZhkizbrPhXAi5tNkdrNJlhZMwywXgc96xpTzxlK61Aw5HNG+f++M7LrenBvbKp17w+WB2jA5t07rZ07B1HrHF16gh4YLzTGjVH+VXln1fiDTzhHimiWbsQxeFGXkn+09CvuC8BqI9+OIDrPhuZSSFP5ZWp9K4NMOR/wB9sui867QtMv7xKnlyIyqrQkNKAVJEokiZgUtWWva7sc5h0XW5FD+ZL5qMCpli4ZSQqguo+y1L3A7/ADlV6a0qMHjYhyaHlyhWBr4DA3kvqNf1aNraCWUMAG82KRwdtgWfegx5u+TzWBbuhaobpJEZRZQggM4uQS+YsYLHZQhiq9wUEg8EkaHiTwvHNcpO5+be5A1j23kn+an6AXlb6f1kxOQ8RgLfdJIU8i63UVPC9yRQq1snLHJ1iNyrlAXG8AsDwWRkJT601Ue34jCKikkkcvlStvO0mOQ/aZAbZG5Pup9zRXgsKyyaXw8kcOqnkG07NO8Dk0FMkyo/vx7Dt9mTI7W6IzzR133yPXuFKRLuf+6AI3Y/A2/PF16X07UahYgwMYj2A70XzN0Nhau9gBZr4snjgA7itrxz4g1GpLaXRKu31K7sOGJ9JAPcJRYE0S3YcWclfA/h+LTAskWx3ADHc7dq4G5jtHA4HwPjJLovQkhHA5PJJJJJ+ST3ydhirIMkQ4zLnwDPuAxjGAxjGAxjGAxjGAxjGB8rPhXPWMDGUzFJpwfbNnGBFz9KRu6jNCTw7ETe3LFWKwK8nQkHtmynTVHtkvtxtwIefpaMNrKGB9mAI/Q5CarwLo3/AOAE/wDTLIK9htB219Ky57cbcCnaXwZp04Abae4tRddtxUAvXcBiQCAe4Byw6TQqnbv8nntxkhtz7WB4Rc9gZ9xgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgMYxgf//Z",
      peak_output: 295,
      max_torque: 36.2,
      min_fuel: 8.0,
      max_fuel: 9.2,
    },
    {
      idx: 1357,
      name: "디젤 2.2",
      price: 1480000,
      description: "높은 토크로 파워풀한 드라이빙이 가능하고 연비 효율이 우수합니다.",
      purchase_rate: "구매자 22.2%가 선택",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSoq9_TqJSZNNdej5Ba7csCrvcZx3-DIzPg&usqp=CAU",
      peak_output: 202,
      max_torque: 45.0,
      min_fuel: 11.4,
      max_fuel: 12.4,
    },
  ],
  driving_methods: [
    {
      idx: 1357,
      name: "2WD",
      price: 0,
      description:
        "엔진 동력이 전륜 후륜 중 하나로 전달되어 움직입니다. 차체가 가벼워 연료 효율이 높습니다.",
      purchase_rate: "구매자 22.2%가 선택",
      img_url:
        "data:image/jpeg;base64,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",
    },
    {
      idx: 1358,
      name: "4WD",
      price: 2370000,
      description:
        "상시 4륜 구동 시스템으로 주행 환경에 맞춰 전후륜 구동력을 자동배분해 안전성을 높입니다",
      purchase_rate: "구매자 22.2%가 선택",
      img_url:
        "data:image/jpeg;base64,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",
    },
  ],
  body_types: [
    {
      idx: 1357,
      name: "7인승",
      price: 0,
      description:
        "2열 가운데 시트를 없애 2열 탑승객의 편의는 물론, 3열 탑승객의 승하차가 편리합니다",
      purchase_rate: "구매자 22.2%가 선택",
      img_url:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr4W3L%2FbtrCDI2Hdn0%2FWbMVaeKarJKWVoM8sgO0M0%2Fimg.png",
    },
    {
      idx: 1358,
      name: "8인승",
      price: 0,
      description:
        "1열 2명, 2열 3명, 3열 3명이 탑승할 수 있는 구조로, 많은 인원이 탑승할 수 있습니다",
      purchase_rate: "구매자 22.2%가 선택",
      img_url:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJs0p5%2FbtrCCE0NiFr%2FkOS9CRAUIWO6V2lUXnkm7k%2Fimg.png",
    },
  ],
};

function DetailModelPage() {
  const [currentTab, setCurrentTab] = useState(ENGINES);
  const navigate = useNavigate();
  const tabs = [ENGINES, DRVING_METHODS, BODY_TYPES];
  const { car, dispatch } = useContext(carContext);

  function dispatchDefault(tabState, actionType, defaultPayload) {
    if (tabState.name === undefined) {
      dispatch({
        type: actionType,
        payload: defaultPayload,
      });
    }
  }

  useEffect(() => {
    switch (currentTab) {
      case ENGINES:
        dispatchDefault(car.detail.engines, CHANGE_ENGINES, DEFAULT_ENGINE[car.trim.name]);
        break;
      case DRVING_METHODS:
        dispatchDefault(
          car.detail.driving_methods,
          CHANGE_DRIVING_METHODS,
          DEFAULT_DRIVING_METHOD[car.trim.name]
        );
        break;
      case BODY_TYPES:
        dispatchDefault(car.detail.body_types, CHANGE_BODY_TYPES, DEFAULT_BODY_TYPE[car.trim.name]);
        break;
      default:
        break;
    }
  }, [currentTab]);

  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        setCurrentTab(tabs[currentIndex + 1]);
      } else {
        navigate("/color");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        setCurrentTab(tabs[currentIndex - 1]);
      } else {
        navigate("/trim");
      }
    }
  }

  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (
            <CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} />
          ))}
        </StTabContainer>
        <StContentsContainer>
          <MainContents currentState={currentTab} data={dummyData} />
        </StContentsContainer>
        <StBottomContainer>
          <StContainer>
            {dummyData[currentTab].map((item, idx) => (
              <DetailModelBox key={idx} {...item} currentTab={currentTab} />
            ))}
          </StContainer>
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>{TRANSLATE[currentTab]} 선택</Title>
              <Description>원하는 {TRANSLATE[currentTab]}을 선택해주세요.</Description>
            </StConfirmHeader>
            <StButtonContainer>
              <WhiteButton
                text={"이전"}
                onClick={() => {
                  handleTabChange("prev");
                }}
              />
              <BlueButton
                text={"다음"}
                onClick={() => {
                  handleTabChange("next");
                }}
              />
            </StButtonContainer>
          </StConfirmContainer>
        </StBottomContainer>
      </StWrapper>
    </>
  );
}

export default DetailModelPage;

const StContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBottomContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 46px;
  bottom: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
`;

const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 154px;
`;

const StConfirmHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  white-space: nowrap;
`;

const StTabContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 128px;
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;
const StContentsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 128px;
`;
