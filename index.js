 var store = Redux.createStore(combineReducer);
		
      var valueEl = document.getElementById('value');
	  var sumval = document.getElementById('sumval');

      function render() {
	
        valueEl.innerHTML = store.getState().count; 
		sumval.innerHTML = store.getState().sum;
      }

      render();
		//store.subscribe ile state değişimlerini render fonksiyonuna yansıtıyoruz.
	 store.subscribe(render);

		//ilk olarak store nesnemizi yaratıyoruz ve store nesnesi counter adında bir reducer fonksiyon alıyor
		// bu reducer fonksiyonu ilk parametresi state nesnesi alıyor burada state nesnesi currentstate objemiz
		// eğer current state ilk çağırışta yoksa, ki yok, burada default state ile nesnemize default değerleri 
		//atıyoruz.
		
		// counter reducer fonksiyonun ikinci parametresi ise action fonsiyonudur. Bu action ile gelen değere göre
		// state nesnesi güncellenir. bu güncelleme daha sonra store.subscribe ile tekrardan rendera yansıtılır.
		
	  