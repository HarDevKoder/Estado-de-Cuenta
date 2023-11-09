const spanBanco = document.getElementById('spanBanco');
const spanSucursal = document.getElementById('spanSucursal');
const spanCliente = document.getElementById('spanCliente');
const spanNumCuenta = document.getElementById('spanNumCuenta');
const spanValorDolar = document.getElementById('spanValorDolar');
const spanValorEuro = document.getElementById('spanValorEuro');
const spanCbu = document.getElementById('spanCbu');
const spanAbierto = document.getElementById('spanAbierto');

let resumen;
fetch('json/resumen.json')
  .then(res => res.json())
  .then((salida) => {
    resumen = salida;
    spanBanco.textContent = resumen.banco;
    spanSucursal.textContent = resumen.sucursal;
    spanCliente.textContent = resumen.titular;
    spanNumCuenta.textContent = `Nro Cuenta: ${resumen.nro_cuenta}`;
    spanValorDolar.textContent = resumen.saldo[0].monto + '  USD';
    spanValorEuro.textContent = resumen.saldo[1].monto + '  EUR';
    spanCbu.textContent = `CBU: ${resumen.cbu}`;
    spanAbierto.textContent = `Abierta: ${resumen.abierto}`;
  })
