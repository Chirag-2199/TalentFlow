import org.json.JSONObject

fun main() {
    val jsonData = """{"name":"Chirag","role":"Developer","active":true}"""
    val obj = JSONObject(jsonData)

    println("Name: ${obj.getString("name")}")
    println("Role: ${obj.getString("role")}")
    println("Active: ${obj.getBoolean("active")}")
}
