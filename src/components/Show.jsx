import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "../modules/Firestore.config.js"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const mySwal = withReactContent(Swal)

function Show() {
  const [producto, setProducto] = useState([])

  const productos = collection(db, "productos")

  const getProductos = async (db) => {
    const data = await getDocs(productos)
    console.log(data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <div className="bg-black text-white h-100">
      <h1>Show</h1>
    </div>
  )
}

export default Show
