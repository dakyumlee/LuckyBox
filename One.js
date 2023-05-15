function coin()  {
  let c = 10;

  while (c > 0){
    let money = prompt("30000원을 입금해주세요!");
      if (money == 30000){
        alert("장바구니에 담겼습니다.");
        c = c -1
      }    else if (money > 30000){
        alert(`거스름돈 ${money -30000}원 적립! 랜덤박스가 장바구니에 담겼습니다.`);
        c = c -1
      }    else {
        alert("입금액이 부족합니다. 다시 입금해주세요.");
        alert(`구매할 수 있는 랜덤박스는 ${c}개 입니다.`);
      }
    }
    alert("구매량 초과! 판매를 중지합니다.");
  }