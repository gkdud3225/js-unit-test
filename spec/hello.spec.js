describe('Hello', ()=> { 
    describe('greeting', ()=>{
      it('인사 문자열을 반환한다', ()=> {
        const expectedStr = Hello.message,
              actualStr = Hello.greeting();
  
        expect(actualStr).toBe(expectedStr);
      })
    })
  });

  describe('Check', ()=> {
    it('입력값을 체크한다', ()=> {
        const str1 = inputStr.str,
              str2 = inputStr.returnStr();
  
        expect(str2).toBe(str1);
    })
  });