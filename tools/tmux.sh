#!/bin/sh

SESSION_NAME="prototype-pe"

PROJECT_NAME="prototype-pe"

cd $HOME/dev/freelancer/$PROJECT_NAME

tmux has-session -t ${SESSION_NAME}

if [ $? != 0 ]
then
  # Create the session
  tmux new-session -s ${SESSION_NAME} -n git -d

  # First window
  # git content tracker (1)
  tmux send-keys -t ${SESSION_NAME} 'git status' C-m

  # node env (2)
  tmux new-window -n dev_start -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:2 'npm run dev-start' C-m

  # react env (3)
  tmux new-window -n dev_react -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:3 'npm run dev-react' C-m

  # db (4)
  tmux new-window -n db -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:4 'mysql -u root' C-m

  # test (5)
  tmux new-window -n test -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:5 'npm test' C-m

  # pwd (6)
  tmux new-window -n pwd -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:6 'pwd' C-m

fi
tmux attach -t ${SESSION_NAME}
