import http.server
import json

# Mock data: Replace this with a database or other data source in the future
characters = [
    {"id": 1, "name": "Sid von Pierce", "role": "Bard", "level": 12},
    {"id": 2, "name": "Dárdanos de Logos", "role": "Cleric", "level": 19}
]

class SimpleHTTPRequestHandler(http.server.BaseHTTPRequestHandler):
    def _set_headers(self, content_type="application/json"):
        """Set response headers."""
        self.send_header('Content-Type', content_type)
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow all origins
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')  # Allow methods
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')  # Allow headers

    def do_OPTIONS(self):
        """Handle preflight requests."""
        self.send_response(204)  # No content
        self._set_headers()
        self.end_headers()

    def do_GET(self):
        """Handle GET requests."""
        if self.path == '/characters':
            self.send_response(200)
            self._set_headers()
            self.end_headers()
            self.wfile.write(json.dumps(characters).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'Endpoint not found')

if __name__ == '__main__':
    server_address = ('', 5001)
    httpd = http.server.HTTPServer(server_address, SimpleHTTPRequestHandler)
    print("Server running on http://localhost:5001")
    httpd.serve_forever()
