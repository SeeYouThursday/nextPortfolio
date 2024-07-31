import {
  Input,
  Button,
  Textarea,
  Card,
  CardHeader,
  // Image,
} from '@nextui-org/react';

//?? order:

const inputs = [
  {
    type: 'text',
    name: 'title',
    label: 'Project Title',
    placeholder: '',
    isSelect: false,
  },
  {
    type: 'text',
    nameInput: 'short-title',
    label: 'Short Title',
    placeholder: 'Your Mom called',
    isSelect: false,
  },
  {
    type: 'text',
    name: 'description',
    label: 'Description',
    placeholder: 'I am so happy you are here',
    isSelect: false,
  },
];

const ProjectForm = () => {
  return (
    <>
      <form>
        {inputs.map((input) => {
          return (
            <>
              <Input
                type={input.type}
                name={input.nameInput}
                label={input.label}
              />
            </>
          );
        })}
      </form>
      {/* // title
  //    short title
  //    description
  //   short descrip
  //   underconstruction
  //   link
  //   github
  //   image_url
  //   icon_url
  //   stack type: string[] */}
    </>
  );
};
