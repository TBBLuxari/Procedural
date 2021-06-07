var Mo=[];
var Mr=[];

//CREAR MATRIZ ORIGINAL

	for (var i = 0; i < 15; i++) 
	{
		Mo.push([])
	}

//CREAR MATRIZ REPLICA

	for (var i = 0; i < 15; i++) 
	{
		Mr.push([])
	}

//  LA LLENO DE UNOS

	for (var i = 0; i < 15; i++) 
	{
		for (var j = 0; j < 15; j++) 
		{
			Mr[i][j]=1
		}
	}
//--------------------------------------------------------------

	//RECORRER MATRIZ ORIGINAL
	//Y PONER 1 SI MATH RANDOM ES < A 0.90
	//SI NO,PONE 0

for (var i = 0; i < 15; i+=2) 
{
	for (var j = 0; j < 15; j+=2) 
	{

		if (Math.random()<0.90) 
		{
			Mo[i][j]=1
		}else 
		{
			Mo[i][j]=0
		}
		
	}
}
//--------------------------------------------------------------------------

for (var i = 0; i < 15; i++) 
{
	for (var j = 0; j < 15; j++) 
	{
		if (Mo[i][j]==0) 
		{
				
				var r = Math.floor((Math.random()*3))

				if (r==0) 
				{
				
					for (var  a=i; a < 15; a++) {Mr[a][j]=0} // I igual a eje x
					for (var b= j; b < 15; b++) {Mr[i][b]=0} // J igual a eje y
				}
				if (r==1) 
				{
				
					for (var   a=0; a < i; a++) {Mr[a][j]=0}
					for (var b= j; b < 15; b++) {Mr[i][b]=0}
				}
				if (r==2) 
				{
				
					for (var   a=0; a < i; a++) {Mr[a][j]=0}
					for (var b= j; b < 15; b++) {Mr[i][b]=0}
				}


		}
	}

}

console.log(Mo)
console.log(Mr)

//----------------------------------------------------------------------------------------------------
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var orbit = new THREE.OrbitControls(camera, renderer.domElement);
//----------------------------------------------------------------
var geometrycalle = new THREE.BoxGeometry(1,0.1,1);
var geometryE1 = new THREE.BoxGeometry(1,6,1);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var cube = new THREE.Mesh( geometrycalle, material );
scene.add( cube );
//----------------------------------------------------------------
camera.position.z = 8;
camera.position.y = 20;
camera.position.x = 8;
camera.rotation.x = -1.5708;
//-----------------------------------------------------------------
var loader = new THREE.TextureLoader();
var L = loader.load("Ele.png");
var cruz = loader.load("Cruz.png");
var vertical = loader.load("Vertical.png");
var Edificio = loader.load("Ed1.png");
var T = loader.load("T.png");
//----------------------------------------------------------------
var material1 = new THREE.MeshBasicMaterial({map:L});
var material2 = new THREE.MeshBasicMaterial({map:cruz});
var material3 = new THREE.MeshBasicMaterial({map:vertical});
var material4 = new THREE.MeshBasicMaterial({map:Edificio});
var material5 = new THREE.MeshBasicMaterial({map:T});
//----------------------------------------------------------------
for (var i = 1; i < 14 ; i++) 
{
	for (var j = 1; j < 14; j++) 
	{
		
		if (Mr[i][j]==0)
		{
			// 1/0/1
			// 1/|/1
			// 1/1/1
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==1 && Mr[i+1][j]==1 && Mr[i][j+1]==1 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				scene.add(cube);
			}
			// 1/1/1
			// 0/-/1
			// 1/1/1
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==0 && Mr[i+1][j]==1 && Mr[i][j+1]==1 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y=Math.PI/2;
				scene.add(cube);
			}
			// 1/1/1
			// 1/-/0
			// 1/1/1
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==1 && Mr[i+1][j]==0 && Mr[i][j+1]==1 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y=Math.PI/2;
				scene.add(cube);
			}
			// 1/1/1
			// 1/|/1
			// 1/0/1
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==1 && Mr[i+1][j]==1 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				scene.add(cube);
			}
			// 1/0/1
			// 1/|/1
			// 1/0/1
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==1 && Mr[i+1][j]==1 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				scene.add(cube);
			}
			// 1/1/1
			// 0/-/0
			// 1/1/1
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==0 && Mr[i+1][j]==0 && Mr[i][j+1]==1 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y=Math.PI/2;
				scene.add(cube);
			}
			// 1/1/1
			// 0/-/0
			// 1/1/1
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==0 && Mr[i+1][j]==0 && Mr[i][j+1]==1 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y=Math.PI/2;
				scene.add(cube);
			}
			// 1/0/1
			// 0/+/0
			// 1/0/1
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==1 && Mr[i+1][j]==1 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material3);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				scene.add(cube);
			}
			// 1/1/1
			// 1/L/0
			// 1/0/1
			
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==1 && Mr[i+1][j]==0 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material1);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				scene.add(cube);
			}
			// 1/1/1
			// 0/L/1
			// 1/0/1
			
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==0 && Mr[i+1][j]==1 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material1);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y =-Math.PI/2
				scene.add(cube);
			}
			// 1/0/1
			// 0/L/1
			// 1/1/1
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==0 && Mr[i+1][j]==1 && Mr[i][j+1]==1 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material1);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y =-Math.PI
				scene.add(cube);
			}

			// 1/0/1
			// 1/L/0
			// 1/1/1
			//bien
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==1 && Mr[i+1][j]==1 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material1);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y =-Math.PI/2-Math.PI
				scene.add(cube);
			}
			// 1/0/1
			// 1/T/0
			// 1/0/1
			//bien
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==1 && Mr[i+1][j]==0 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material5);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;

				scene.add(cube);
			}
			// 1/1/1
			// 0/T/0
			// 1/0/1
			//bien
			if (  Mr[i][j-1]==1 && Mr[i-1][j]==0 && Mr[i+1][j]==0 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material5);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y=-Math.PI/2

				scene.add(cube);
			}
			// 1/0/1
			// 0/T/1
			// 1/0/1
			//bien
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==0 && Mr[i+1][j]==1 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material5);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y=Math.PI

				scene.add(cube);
			}
			// 1/0/1
			// 0/T/0
			// 1/1/1
			//bien
			if (  Mr[i][j-1]==0 && Mr[i-1][j]==0 && Mr[i+1][j]==0 && Mr[i][j+1]==1 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material5);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				cube.rotation.y=Math.PI+Math.PI/2

				scene.add(cube);
			}


			if (  Mr[i][j-1]==0 && Mr[i-1][j]==0 && Mr[i+1][j]==0 && Mr[i][j+1]==0 ) 
			{
				var cube = new THREE.Mesh(geometrycalle,material2);
				cube.position.x=i;
				cube.position.z=j;
				cube.position.y=-3;
				scene.add(cube);
			}

		}
		
		if (Mr[i][j]==1)
		{


			var r = Math.floor((Math.random()*3))

			if (r==0) 
			{
			var cube = new THREE.Mesh(geometryE1,material4);
			cube.position.x=i;
			cube.position.z=j;

			cube.scale.y=Math.random() * (2 - 0.2) + 0.2;
			scene.add(cube);
			}
			if (r==1) 
			{
			var cube = new THREE.Mesh(geometryE1,material4);
			cube.position.x=i;
			cube.position.z=j;
			cube.scale.y=Math.random() * (2 - 0.2) + 0.2;
			scene.add(cube);
			}
			if (r==2) 
			{
			var cube = new THREE.Mesh(geometryE1,material4);
			cube.position.x=i;
			cube.position.z=j;
			cube.scale.y=Math.random() * (2 - 0.2) + 0.2;
			scene.add(cube);
			}


		}

	}

}



function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
