import './App.css';
import FileUpload from './components/FileUpload';
import Textarea from './components/Textarea';
// import FileUploadPage from './components/FileUploadNew';

function App() {
  return (
    <div className="container">
        <h4 className="display-6 text-center mb-4">
        <i className="fas fa-cloud-upload-alt"></i> Cloud File Upload
        </h4>
      
      Hello There
      {/* <FileUploadPage /> */}
      <FileUpload />
      <Textarea />
    </div>

  );
}

export default App;
